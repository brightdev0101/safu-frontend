import React, {Component} from 'react';
import Card from "./Card";
import axios from 'axios';
import Web3 from 'web3';

class PadList extends Component {

    constructor (props) {
        super(props);
       
        this.state = {
            title: '',
            symbol:'',
            rate:'',
            softCap:'',
            hardCap:'',
            minBuy: '',
            maxBuy: '',
            from: '',
            to: '',
            cards:[]
        };

        axios.get("http://localhost:3001/api/getAll")
            .then( res => {
                const orders = res.data;
                const orderedItemNames = orders
                                        .filter(order => order.launchpad != null)
                                        .map(order => order.launchpad);
                
            orderedItemNames.forEach((launchpad, key) => { 
                axios.get("http://localhost:3001/api/getPresaleContract")
                    .then( (res) => {
                        const abi = res.data.abi;
                        const web3 = new Web3(Web3.givenProvider);
                        const presaleContract = new web3.eth.Contract(abi, launchpad);
                        
                        presaleContract.methods.tokeninfo().call().then(res=>{
                            this.state.title = res.name;
                            this.state.symbol = res.symbol;
                        }).catch(err=>console.log(err));

                        presaleContract.methods.presale_info().call().then(res=>{
                            const from1 = (new Date(Number(res.presale_start))).toLocaleString(); //2019-12-9 10:30:15
                            const to1 = (new Date(Number(res.presale_end))).toLocaleString(); //2019-12-9 10:30:15
                            this.state.rate = res.token_rate;
                            this.state.softCap = res.softcap;
                            this.state.hardCap = res.hardcap;
                            this.state.minBuy = res.raise_min;
                            this.state.maxBuy = res.raise_max;
                            this.state.from = from1;
                            this.state.to = to1;

                            this.state.cards[key] = (<Card title={this.state.title} symbol={this.state.symbol} softCap={this.state.softCap} hardCap={this.state.hardCap} minBuy={this.state.minBuy} maxBuy={this.state.maxBuy} from={this.state.from} to={this.state.to}/>);

                        }).catch(err=>console.log(err));
                    }).catch(err=>console.log(err));  
            });
        }).catch(err => console.log(err));      
    }

    render(){

        console.log(this.state.cards);
        console.log(this.state);

        return (
            <>
            <section className="pt-4 black-background">
                <div className="container px-lg-5 " >
                    <div className="bg-dark style-border p-4 p-lg-5  white-font rounded-3 text-center">
                        <div className="m-4 m-lg-5 ">
                            <h1 className="socials fw-bold">Current Presale</h1>
                            <p className="fs-4">Presales are usually sold from a separate allocation of seats, which may not be the same as the tickets being released to the general public.</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter token name or token symbol." />
                                <button className="btn btn-success" style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}} type="text">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-5 ml-3 mr-1" style={{}}>
                     <Card title="ass" symbol="wee" softCap="1" hardCap="3" minBuy="3" maxBuy="6" from="wwer" to="aca"/> 
                // {this.state.cards}
                    <p>{this.state.title}
                    {this.state.rate}</p>
                </div>
            </section>
            </>
        );
    }
   
};

export default PadList;
