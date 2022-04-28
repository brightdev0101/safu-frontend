import React, {useState} from 'react';
import Card from "./Card";
import axios from 'axios';
import Web3 from 'web3';

const PadList = () => {

    const [title, setTitle] = useState([]);
    const [symbol, setSymbol] = useState([]);
    const [rate, setRate] = useState([]);
    const [softCap, setSoftCap] = useState([]);
    const [hardCap, setHardCap] = useState([]);
    const [minBuy, setMinBuy] = useState([]);
    const [maxBuy, setMaxBuy] = useState([]);
    const [from, setFrom] = useState([]);
    const [to, setTo] = useState([]);
    const [rows, ssetRows] = useState([]);


    axios.get("http://localhost:3001/api/getAll")
    .then( (res) => {
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
                                // setTitle(res.name);
                                setTitle([...title, res.name])
                                setSymbol([...symbol, res.symbol]);
                            });
                            
                            presaleContract.methods.presale_info().call().then(res=>{
                                setRate([...rate, res.token_rate])
                                setSoftCap([...softCap, res.softcap])
                                setHardCap([...hardCap, res.hardcap])
                                setMinBuy([...minBuy, res.raise_min])
                                setMaxBuy([...maxBuy, res.raise_max])
                                
                                // dateObject = (new Date(Number(res.presale_start))).toLocaleString();
                                const from1 = (new Date(Number(res.presale_start))).toLocaleString(); //2019-12-9 10:30:15
                                setFrom([...from, from1])

                                // dateObject = new Date(Number(res.presale_end));
                                const to1 = (new Date(Number(res.presale_end))).toLocaleString(); //2019-12-9 10:30:15
                                setTo([...to, to1])
                            });
                    });
                })                 
    }).catch(err => console.log(err));

    var rowData = [];

    title.forEach(element => {
        var index = title.findIndex(x => x == element);
        rowData.push({
            title: title[index],
            rate:rate[index],
            symbol:symbol[index],   
            softCap:softCap[index],
            hardCap:hardCap[index],
            minBuy:minBuy[index],
            maxBuy:maxBuy[index],
            from:from[index],
            to:to[index]                  
        });
    });
    ssetRows(rowData);
    console.log(rows);


   

    return (
        
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
            {rows.map((row) => {
                console.log(row);
                <Card 
                    title = {row.title} 
                    rate = {row.rate} 
                    symbol = {row.symbol}  
                    softCap= {row.softCap}  
                    hardCap= {row.hardCap} 
                    minBuy= {row.minBuy} 
                    maxBuy= {row.maxBuy} 
                    from= {row.from} 
                    to= {row.to} 
                /> 
            })}
            {/* <input type="hidden" value={rows.length} /> */}
               
            </div>
        </section>
    );
};

export default PadList;
