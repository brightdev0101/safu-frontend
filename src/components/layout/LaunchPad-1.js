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
            tokenChainValid: false
        };

        axios.get("http://localhost:3001/api/getTokenContract")
            .then(async (res) => {
                const abi = res.data.abi;
                this.state.abi = abi;
            }).catch(err => console.log(err));
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
                        tokenAddressValid: tokenAddressValid
                      }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.tokenAddressValid},()=>{
            if(this.state.tokenAddressValid){
                console.log("ok");
                const abi = this.state.abi;
                const web3 = new Web3(Web3.givenProvider);
                // const tokenContract = new web3.eth.Contract(abi, this.state.tokenAddress);

                // console.log(tokenContract);

                // tokenContract.methods.name().call().then(res=>{
                //     this.setState({tokenName:res});
                //     window.localStorage.setItem("tokenName",res);
                // });
                // tokenContract.methods.symbol().call().then(res=>{
                //     this.setState({tokenSymbol:res});
                //     window.localStorage.setItem("tokenSymbol",res);
                // });
                // tokenContract.methods.decimals().call().then(res=>{
                //     this.setState({tokenDecimals:res});
                //     window.localStorage.setItem("tokenDecimals",res);
                // });
                // tokenContract.methods.totalSupply().call().then(res=>{
                //     this.setState({tokenSupply:res});
                //     window.localStorage.setItem("tokenSupply",res);
                // });
                // this.setState({tokenChainValid: true});
            }
        });
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
                                                <p className="help is-info">Create pool fee: 0.01 BNB</p>
                                            </div>
                                        </div>
                                        <div className="has-text-centered" ><Link to={this.state.formValid?'/LaunchPad2':''} className="btn btn-primary"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Next</span></Link></div>
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
  
export default LaunchPad1;