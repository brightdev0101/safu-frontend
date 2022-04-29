import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { getVerify } from "../../actions/verifyActions";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Web3 from 'web3';
import {parse, stringify} from 'flatted';
import axios from 'axios';

import "./styles.css";

class LaunchPad1 extends Component {
    constructor (props) {
        super(props);
       
        this.state = {
            abi: '',
            tokenName:'',
            tokenSymbol:'',
            tokenDecimals:'',
            tokenSupply:'',
            tokenAddress: '',
            tokenAddressError: '',
            tokenAddressValid: false,
            formValid: false,
            tokenChainValid: false,
            tokenAddressOrig: []
        };

        axios.get("http://localhost:3001/api/getTokenContract")
            .then(async (res) => {
                const abi = res.data.abi;
                this.state.abi = abi;
            }).catch(err => console.log(err));

        axios.get("http://localhost:3001/api/getAll")
            .then(async(res)=>{
                this.state.tokenAddressOrig = res.data;
            }).catch(err=>console.log(err));
    }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { 
            this.validateField(name, value);  
        });

    }
    
    validateField(fieldName, value) {
        let tokenAddressError = this.state.tokenAddressError;
        let tokenAddressValid = this.state.tokenAddressValid;
      
        tokenAddressValid =  value.match(/^(0x[0-9a-f]{40})(,0x[0-9a-f]{40})*$/i);

        tokenAddressError = tokenAddressValid ? '' : ' is invalid';

        if(tokenAddressError == ''){
            tokenAddressValid = true;
        }else{
            tokenAddressValid = false;
        }

        this.setState({ tokenAddressError: tokenAddressError,
                        tokenAddressValid: tokenAddressValid,
                        formValid: false
                      }, this.validateForm);
    }
      
    validateForm() {
        if(this.state.tokenAddressValid){
            const abi = this.state.abi;
            const web3 = new Web3(Web3.givenProvider);

            if(web3.utils.isAddress(this.state.tokenAddress)){
                web3.eth.getCode(this.state.tokenAddress).then(res=>{
                    console.log(res);
                    if(res != "0x"){

                        for(let i=0; i<this.state.tokenAddressOrig.length; i++){
                            if(this.state.tokenAddress == this.state.tokenAddressOrig[i].token && this.state.tokenAddressOrig[i].launchpad !== undefined){
                                this.setState({ tokenAddressError: "This token already has presale",
                                                tokenAddressValid: false,
                                                formValid: false
                                });
                            }
                        }

                        if(this.state.tokenAddressValid == true){
                            const tokenContract = new web3.eth.Contract(abi, this.state.tokenAddress);
                            tokenContract.methods.name().call().then(res=>{
                                this.setState({tokenName:res});
                                window.localStorage.setItem("tokenName",res);
                            });
                            tokenContract.methods.symbol().call().then(res=>{
                                this.setState({tokenSymbol:res});
                                window.localStorage.setItem("tokenSymbol",res);
                            });
                            tokenContract.methods.decimals().call().then(res=>{
                                this.setState({tokenDecimals:res});
                                window.localStorage.setItem("tokenDecimals",res);
                            });
                            tokenContract.methods.totalSupply().call().then(res=>{
                                this.setState({tokenSupply:res});
                                window.localStorage.setItem("tokenSupply",res);
                            });
                            this.setState({tokenChainValid: true});
                            this.setState({formValid: this.state.tokenAddressValid});
                            window.localStorage.setItem("tokenAddress",this.state.tokenAddress);
                        }     
                    } else {
                        this.setState({
                            formValid : false,
                            tokenAddressError: "this address is not a token",
                            tokenAddressValid: false
                        });
                    }
                }).catch(err=>console.log(err));
            }else{
                this.setState({formValid:false});
            }      
        }else{
            this.setState({formValid:false});
        }
    }

    render() {
        return (
            // { window.localStorage.getItem('tokenAddress')}
            <>
                <section className="ant-layout black-background">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                        <div className="py-6 container">
                            
                            <div style={{height: '16px'}}></div>

                            <div className="bg-dark  style-border ant-card ant-card-bordered">
                                <div className="ant-card-body">
                                    <h1 className="socials text-center">Verify Token</h1>
                                    <p className="lead text-center">
                                        <i>Enter the token address and verify</i>
                                    </p>
                                    <form>
                                        <p className="has-text-primary is-size-7">(*) is required field.</p>
                                        
                                        <div className="field">
                                            <div className="row is-flex is-align-items-center mb-2 flex-wrap">
                                                <div className="is-flex-grow-1 mr-4"><label className="label" htmlFor="tokenAddress">Token address<sup className="has-text-danger">*</sup></label></div>
                                                
                                                <div className="mt-2">
                                                    <a href="/CreateToken" className="btn btn-success"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Create token</span></a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input name="tokenAddress" value={this.state.tokenAddress} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.tokenAddressError })} type="text" placeholder="Ex: 0x..." id="tokenAddress" autoComplete="off"/>

                                                <div className="invalid-feedback">{this.state.tokenAddressError}</div>
                                                <p className="help is-info">Create pool fee: 0.7 BNB</p>
                                            </div>
                                        </div>
                                        <div className="has-text-centered" ><Link to={this.state.formValid?'/LaunchPad2':'#'}><button className="btn btn-primary" disabled={!this.state.formValid}  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}>Next</button></Link></div>
                                    </form>
                                    <div>
                                        <p>{this.state.formValid?this.state.tokenName:''}</p>
                                        <p>{this.state.formValid?this.state.tokenSymbol:''}</p>
                                        <p>{this.state.formValid?this.state.tokenDecimals:''}</p>
                                        <p>{this.state.formValid?this.state.tokenSupply:''}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    
                </section>
            </>
        );
    }
};
  
export default LaunchPad1;