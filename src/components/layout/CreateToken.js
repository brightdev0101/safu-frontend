
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classnames from "classnames";
import isEmpty from "../../validation/isEmpty";
import {ethers} from 'ethers';
import axios from 'axios';
import Moralis from "moralis";
import {parse, stringify} from 'flatted';
import Web3 from 'web3';

import "./styles.css";

class CreateToken extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tokenAddress:'',
            tokenType: '',
            tokenName: '',
            symbol: '',
            decimals: '',
            totalSupply: '',
            formErrors: {tokenType: '', tokenName: '', symbol: '', decimals: '', totalSupply: ''},
            tokenTypeValid: false,
            nameValid: false,
            symbolValid: false,
            decimalsValid: false,
            totalSupplyValid: false,

            formValid: false
        };

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(e) {

        e.preventDefault();
    
        const tokenName = this.state.tokenName;
        const symbol = this.state.symbol;
        const decimals = this.state.decimals;
        const totalSupply = this.state.totalSupply;
        console.log(totalSupply);
        if(window.localStorage.getItem("signer")){
            const signer = parse(window.localStorage.getItem("signer"));
        const userAddress = window.localStorage.getItem("userAddress");
        console.log(signer);

        axios.get("http://localhost:3001/api/getTokenContract")
            .then(async (res) => {
                const bytecode = res.data.evm.bytecode.object;
                const abi = res.data.abi;
                const chainID = signer.provider._network.chainId;
                
                const web3 = new Web3(Web3.givenProvider);
                const deploy_contract = new web3.eth.Contract(abi);
                              
                let payload = {
                    data: '0x'+bytecode,
                    arguments: [tokenName,symbol,decimals,totalSupply]
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
                    // console.log('Deployed Contract Address : ', newContractInstance.options.address);
                    this.setState({'tokenAddress':newContractInstance.options.address})
                    axios.post("http://localhost:3001/api/addTokenAddress", {
                        userAddress: userAddress,
                        tokenAddress: newContractInstance.options.address,
                        chainID : chainID
                    })
                    .then(console.log("success")).catch(err=>console.log(err));
                })
                
                // const factory = new ethers.ContractFactory(abi, bytecode, signer);    
                
                // let contract = await factory.deploy(tokenName, symbol, decimals, totalSupply,"0xD99D1c33F9fC3444f8101754aBC46c52416550D1");
                
                // await contract.deployTransaction.wait();
                // // const contract = await factory.deploy(tokenName, symbol, decimals, totalSupply,"0xD99D1c33F9fC3444f8101754aBC46c52416550D1");                
                // // await contract.deployTransaction.wait();

                // console.log(contract.address);
                // // console.log(contract);
                // // address backend db save

            }).catch(err => console.log(err));
        } else {
            alert('You must connect!')
        }
        
    
    }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value)});
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;

        let tokenTypeValid = this.state.tokenTypeValid;
        let tokenNameValid = this.state.tokenNameValid;
        let symbolValid = this.state.symbolValid;
        let decimalsValid = this.state.decimalsValid;
        let totalSupplyValid = this.state.totalSupplyValid;
      
        switch(fieldName) {
            case 'tokenType':
                tokenTypeValid = isEmpty(value) ? '' : 'have value';
                fieldValidationErrors.tokenType = tokenTypeValid ? '' : ' is invalid';
                break;
            case 'tokenName':
                tokenNameValid = isEmpty(value) ? '' : 'have value';
                fieldValidationErrors.tokenName = tokenNameValid ? '' : ' is invalid';
                break;
            case 'symbol':
                symbolValid = isEmpty(value) ? '' : 'have value';
                fieldValidationErrors.symbol = symbolValid ? '' : ' is invalid';
                break;
            case 'decimals':
                decimalsValid = value > 0;
                fieldValidationErrors.decimals = decimalsValid ? '' : ' is invalid';
                break;
            case 'totalSupply':
                totalSupplyValid = value > 0;
                fieldValidationErrors.totalSupply = totalSupplyValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        tokenTypeValid: tokenTypeValid,
                        tokenNameValid: tokenNameValid,
                        symbolValid: symbolValid,
                        decimalsValid: decimalsValid,
                        totalSupplyValid: totalSupplyValid,
                    }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.tokenTypeValid && this.state.tokenNameValid && this.state.symbolValid && this.state.decimalsValid && this.state.totalSupplyValid });
    }

    render() {
        
        return (
            <>
                <section className="ant-layout black-background">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                        <div className="py-6 container">
                            
                            <div style={{height: '16px'}}></div>

                            <div className="bg-dark  style-border ant-card ant-card-bordered">
                                <div className="ant-card-body" id="createToken">
                                    <h1 className="socials text-center">Create Token</h1>
                                    <form  onSubmit={this.onSubmit}>
                                        <p className="has-text-primary is-size-7">(*) is required field.</p>
                                        {/* <div className="field">
                                            <label htmlFor="tokenType" className="label">Token Type<sup className="has-text-danger">*</sup></label>

                                            <div className="control">
                                                <select className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.tokenType })} name="tokenType" id="tokenType">
                                                    <option value="standard">Standard Token</option>
                                                    <option value="liquidity">Liquidity Generator Token</option>
                                                    <option value="baby">Baby Token</option>
                                                    <option value="buyback">Buyback Baby Token</option>
                                                </select>
                                                <div className="invalid-feedback">{this.state.formErrors.tokenType}</div>
                                                <p className="help is-info">Fee: 0.01 BNB</p>
                                            </div>
                                        </div> */}

                                        <div className="field">
                                            <label htmlFor="tokenName" className="label">Name<sup className="has-text-danger">*</sup></label>
                                            <div className="control">

                                                <input value={this.state.tokenName} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.tokenName })} type="text" id="tokenName" name="tokenName" placeholder="Ex: Ethereum" maxLength="255" />

                                                <div className="invalid-feedback">{this.state.formErrors.tokenName}</div>
                                            </div>
                                        </div>
                                        <div className="field"><label htmlFor="symbol" className="label">Symbol<sup className="has-text-danger">*</sup></label>
                                            <div className="control">
                                                <input value={this.state.symbol} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.symbol })} type="text" id="symbol" name="symbol" placeholder="Ex: ETH" maxLength="255" />

                                                <div className="invalid-feedback">{this.state.formErrors.symbol}</div>

                                            </div>
                                        </div>
                                        <div className="field"><label htmlFor="decimals" className="label">Decimals<sup className="has-text-danger">*</sup></label>
                                            <div className="control">

                                                <input value={this.state.decimals} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.decimals })} type="text" id="decimals" name="decimals" placeholder="Ex: 18" />

                                                <div className="invalid-feedback">{this.state.formErrors.decimals}</div>
                                            </div>
                                        </div>

                                        <div className="field"><label htmlFor="totalSupply" className="label">Total supply<sup className="has-text-danger">*</sup></label>
                                            <div className="control">

                                                <input value={this.state.totalSupply} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.totalSupply })} type="text" id="totalSupply" name="totalSupply" placeholder="Ex: 100000000000" />

                                                <div className="invalid-feedback">{this.state.formErrors.totalSupply}</div>
                                            </div>
                                        </div>
                                        
                                        <div className="has-text-centered mt-6 pt-4 mb-4"><button type="submit" className="btn btn-success" disabled=""  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Create token</span></button></div>
                                    </form>
                                    <p>{this.state.tokenAddress} </p>
                                </div>
                            </div>
                        </div>
                    </main>
                    
                </section>
            </>
        );
    }
};

export default CreateToken;
