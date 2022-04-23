import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import axios from 'axios';
import Web3 from 'web3';
import {parse, stringify} from 'flatted';

class LaunchPad4 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            logoUrl: '',
            website: '',
            formErrors: {logoUrl: '', website: ''},
            logoUrlValid: false,
            websiteValid: false,
            formValid: false
        };

        this.onSubmit = this.onSubmit.bind(this);

    }

    clickB(){
        axios.get("http://localhost:3001/api/getPresaleContract")
            .then(async (res) => {
                const bytecode = res.data.evm.bytecode.object;
                const abi = res.data.abi;

                console.log(abi);

                const web3 = new Web3(Web3.givenProvider);
                const presaleContract = new web3.eth.Contract(abi, window.localStorage.getItem("presaleAddress"));

                console.log(presaleContract);
                presaleContract.methods.init_presale(
                    window.localStorage.getItem("tokenAddress"),
                    window.localStorage.getItem("presaleRate"),
                    window.localStorage.getItem("minBuy"),
                    window.localStorage.getItem("maxBuy"),
                    window.localStorage.getItem("softCap"),
                    window.localStorage.getItem("hardCap"),
                    window.localStorage.getItem("fromTS"),
                    window.localStorage.getItem("toTS")
                ).call();
            })
        
    }

    onSubmit(e) {

        e.preventDefault();
    
        if(window.localStorage.getItem("signer")){
            const signer = parse(window.localStorage.getItem("signer"));
            const userAddress = window.localStorage.getItem("userAddress");

            axios.get("http://localhost:3001/api/getPresaleContract")
            .then(async (res) => {
                const bytecode = res.data.evm.bytecode.object;
                const abi = res.data.abi;
                const chainID = signer.provider._network.chainId;

                const web3 = new Web3(Web3.givenProvider);
                const deploy_contract = new web3.eth.Contract(abi);
                              
                let payload = {
                    data: '0x'+bytecode
                }

                let parameter = {
                    from: userAddress,
                    gas: web3.utils.toHex(5000000),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei'))
                }

                deploy_contract.deploy(payload).send(parameter, (err, transactionHash) => {
                    console.log('Transaction Hash :', transactionHash);
                }).on('confirmation', () => {}).then((newContractInstance) => {
                    // console.log(newContractInstance);
                    console.log('Deployed Contract Address : ', newContractInstance.options.address);
                    this.setState({'PresaleAddress':newContractInstance.options.address});
                    window.localStorage.setItem("presaleAddress",newContractInstance.options.address);

                    console.log(newContractInstance);
                    newContractInstance.methods.init_presale(
                        window.localStorage.getItem("tokenAddress"),
                        window.localStorage.getItem("presaleRate"),
                        window.localStorage.getItem("minBuy"),
                        window.localStorage.getItem("maxBuy"),
                        window.localStorage.getItem("softCap"),
                        window.localStorage.getItem("hardCap"),
                        window.localStorage.getItem("fromTS"),
                        window.localStorage.getItem("toTS")
                    ).send({from:userAddress});

                    axios.post("http://localhost:3001/api/addPresaleAddress", {
                        userAddress: userAddress,
                        tokenAddress: window.localStorage.getItem("tokenAddress"),
                        presaleAddress: newContractInstance.options.address,
                        chainID : chainID
                    })
                    .then(console.log("success")).catch(err=>console.log(err));
                })
            }).catch(err => console.log(err));
        } else {
            alert('You must connect!')
        }
        
    
    }

    render() {
        const presaleRate = window.localStorage.presaleRate
        const softCap = window.localStorage.softCap
        const hardCap = window.localStorage.hardCap
        const minBuy = window.localStorage.minBuy
        const maxBuy = window.localStorage.maxBuy
        const liquidity = window.localStorage.liquidity
        const from = window.localStorage.from
        const to = window.localStorage.to
        const liquidityLockTime = window.localStorage.liquidityLockTime
        const website = window.localStorage.website
        const tokenName = window.localStorage.tokenName
        const tokenSymbol = window.localStorage.tokenSymbol
        const tokenDecimals = window.localStorage.tokenDecimals
        const tokenSupply = window.localStorage.tokenSupply

        return (
            <>
                <section className="ant-layout black-background">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                    <div className="py-6 container">
                        <div style={{height: '16px'}}></div>
                        <div className="bg-dark style-border ant-card ant-card-bordered">
                            <div className="ant-card-body">
                                <h1 className="socials text-center">Finish</h1>
                                <p className="lead text-center">
                                    <i>Review your information</i>
                                </p>
                                <button onClick={this.clickB}>click this</button>
                                <form onSubmit={this.onSubmit}>
                                    <div className="table-container">
                                        <div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td width="50%">Total token</td>
                                                        <td className="has-text-primary has-text-right">{tokenSupply/(10**18)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Token name</td>
                                                        <td className="has-text-info has-text-right">{tokenName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Token symbol</td>
                                                        <td className="has-text-info has-text-right">{tokenSymbol}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Token decimals</td>
                                                        <td className="has-text-info has-text-right">{tokenDecimals}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Presale rate</td>
                                                        <td className="has-text-info has-text-right">{presaleRate}</td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td width="50%">Listing rate</td>
                                                        <td className="has-text-info has-text-right">1000 www</td>
                                                    </tr> */}
                                                    {/* <tr>
                                                        <td width="50%">Sale method</td>
                                                        <td className="has-text-info has-text-right">Public</td>
                                                    </tr> */}
                                                    <tr>
                                                        <td width="50%">Softcap</td>
                                                        <td className="has-text-info has-text-right">{softCap} BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Hardcap</td>
                                                        <td className="has-text-info has-text-right">{hardCap} BNB</td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td width="50%">Unsold tokens</td>
                                                        <td className="has-text-info has-text-right">Burn</td>
                                                    </tr> */}
                                                    <tr>
                                                        <td width="50%">Minimum buy</td>
                                                        <td className="has-text-info has-text-right">{minBuy} BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Maximum buy</td>
                                                        <td className="has-text-info has-text-right">{maxBuy} BNB</td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td width="50%">Liquidity</td>
                                                        <td className="has-text-info has-text-right">{liquidity}%</td>
                                                    </tr> */}
                                                    <tr>
                                                        <td width="50%">Start time</td>
                                                        <td className="has-text-info has-text-right">{from}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">End time</td>
                                                        <td className="has-text-info has-text-right">{to}</td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td width="50%">Liquidity lockup time</td>
                                                        <td className="has-text-info has-text-right">{liquidityLockTime} minutes</td>
                                                    </tr> */}
                                                    <tr>
                                                        <td width="50%">Website</td>
                                                        <td className="has-text-info has-text-right">{website}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                    <div className="has-text-centered">
                                        <a href="/LaunchPad3" className="btn btn-secondary"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Back</span></a><span className="mr-4"></span><button type="submit" className="btn btn-danger"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Submit</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </main>
                    
                </section>
            </>
        );
    }
};

LaunchPad4.propTypes = {
    // verify: PropTypes.string.isRequired
};
  
const mapStateToProps = state => ({
    tokenAddress: state.tokenAddress
    // errors: state.errors
});
  
export default connect(
    mapStateToProps,
    {}
)(LaunchPad4);
