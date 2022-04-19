
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classnames from "classnames";
import isEmpty from "../../validation/isEmpty";

import "./styles.css";

class PadInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            buy: '',
            formErrors: {buy: ''},
            buyValid: false,
            formValid: false
        };

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(e) {
        e.preventDefault();
    
        const profileData = {
          handle: this.state.handle,
          company: this.state.company,
          website: this.state.website,
          location: this.state.location,
          status: this.state.status,
          skills: this.state.skills,
          githubusername: this.state.githubusername,
          bio: this.state.bio,
          twitter: this.state.twitter,
          facebook: this.state.facebook,
          linkedin: this.state.linkedin,
          youtube: this.state.youtube,
          instagram: this.state.instagram
        };
    
        // this.props.createProfile(profileData, this.props.history);
    }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value)});
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;

        let buyValid = this.state.buyValid;
      
        switch(fieldName) {
            case 'buy':
                buyValid = isEmpty(value) ? '' : ' is invalid';
                fieldValidationErrors.buy = buyValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        buyValid: buyValid
                    }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.buyValid });
    }

    render() {
        return (
            <>
                <section className="ant-layout black-background">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                        <div className=" py-6 container">
                            <div className="bg-dark style-border columns mt-4">
                                <div className="column is-flex-grow-2">
                                    <div className="ant-card ant-card-bordered">
                                        <div className="ant-card-body">
                                            <article className="media pool-detail" style={{position: 'relative'}}>
                                                <figure className="media-left" style={{border: '1px solid rgba(249, 81, 146, 0.2)', borderRadius: '50%', overFlow: 'hidden'}}>
                                                    <p className="image is-48x48"><img src="https://ipfs.infura.io/ipfs/QmashJXiVvFjNXrgjHkadWhCEmJ1cAUmVxcL1Zak7s8tXf" alt="" style={{filter: 'grayscale(1)'}} /></p>
                                                </figure>
                                                <div className="media-content">
                                                    <div className="content">
                                                        <div className="is-flex is-align-items-center">
                                                            <div className="is-flex-grow-1 is-flex is-align-items-center single-title">
                                                                <h1 className="title mr-2">3w Presale</h1><span className="tag is-warning"><span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"></path></svg></span></span>
                                                                <h1 className="title ml-2"><a className="is-size-5" href="#/launchpad/edit/0x9FbC409978B12A786e67D19207d9106924513599?chain=BSC-Test"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg></a></h1>
                                                                <div className="status-wrapper"><span className="is-flex status-dot incoming"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg><span> Sale Ended</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="is-flex mt-1 mb-2">
                                                            <div><a href="https://imgur.com/a/21hZVyO" rel="nofollow noreferrer" target="_blank" className="mr-4 is-size-5"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a></div>
                                                        </div>
                                                        <div className="ant-typography"></div>
                                                    </div>
                                                </div>
                                            </article>
                                            <div className="table-container mt-6">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Presale Address</td>
                                                            <td className="has-text-right"><a href="https://testnet.bscscan.com/address/0x9FbC409978B12A786e67D19207d9106924513599" target="_blank" rel="noreferrer nofollow">0x9FbC409978B12A786e67D19207d9106924513599</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Token Name</td>
                                                            <td className="has-text-right">3w</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Token Symbol</td>
                                                            <td className="has-text-right">www</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Token Decimals</td>
                                                            <td className="has-text-right">18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Token Address</td>
                                                            <td className="has-text-right"><a className="mr-1" href="https://testnet.bscscan.com/address/0xC7DA2819e4dA4E68E834169d2254bAd1DF6883d8" target="_blank" rel="noreferrer nofollow">0xC7DA2819e4dA4E68E834169d2254bAd1DF6883d8</a><br />
                                                                <p className="help is-info">(Do not send BNB to the token address!)</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total Supply</td>
                                                            <td className="has-text-right">100,000,000,000 www</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tokens For Presale</td>
                                                            <td className="has-text-right">1,000,000 www</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tokens For Liquidity</td>
                                                            <td className="has-text-right">52,000 www</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presale Rate</td>
                                                            <td className="has-text-right">1 BNB = 10,000 www</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Listing Rate</td>
                                                            <td className="has-text-right">1 BNB = 1,000 www</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Soft Cap</td>
                                                            <td className="has-text-right">50 BNB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hard Cap</td>
                                                            <td className="has-text-right">100 BNB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Unsold Tokens</td>
                                                            <td className="has-text-right">Burn</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presale Start Time</td>
                                                            <td className="has-text-right">2022.04.05 22:52 (UTC)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Presale End Time</td>
                                                            <td className="has-text-right">2022.04.06 22:52 (UTC)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Listing On</td>
                                                            <td className="has-text-right"><a className="mr-1" href="https://pancakeswap.finance/swap?outputCurrency=0xC7DA2819e4dA4E68E834169d2254bAd1DF6883d8" target="_blank" rel="noreferrer nofollow">Pancakeswap</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Liquidity Percent</td>
                                                            <td className="has-text-right">52%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Liquidity Lockup Time</td>
                                                            <td className="has-text-right">10 minutes after pool ends</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="column is-flex-grow-1">
                                    <div className="ant-card ant-card-bordered">
                                        <div className="ant-card-body">
                                            <div data-show="true" className="ant-alert ant-alert-warning ant-alert-no-icon" role="alert" style={{marginBottom: '10px'}}>
                                                <div className="ant-alert-content">
                                                    <div className="ant-alert-message">Make sure the website is pinksale.finance!</div>
                                                    <div className="ant-alert-description"></div>
                                                </div>
                                            </div>
                                            <form onSubmit={this.onSubmit}>
                                                <div className="has-text-centered">
                                                    <p className="mb-2">Presale Starts In</p>
                                                    <div className="has-text-centered"><strong><span className="p-2 has-background-danger-light mr-2" style={{borderRadius: '4px'}}>00</span><span className="p-2 has-background-danger-light mr-2" style={{borderRadius: '4px'}}>23</span><span className="p-2 has-background-danger-light mr-2" style={{borderRadius: '4px'}}>45</span><span className="p-2 has-background-danger-light mr-2" style={{borderRadius: '4px'}}>39</span></strong></div>
                                                </div>
                                                <div className="pb-4">
                                                    <div className="ant-progress ant-progress-line ant-progress-status-normal ant-progress-default mt-4 mb-2">
                                                        <div className="ant-progress-outer">
                                                            <div className="ant-progress-inner">
                                                                <div className="ant-progress-bg" style={{width: '0%', height: '15px', background: 'rgb(72, 199, 116)'}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="is-flex is-align-items-center is-size-7">
                                                        <div className="is-flex-grow-1">0 BNB</div>
                                                        <div className="is-flex-grow-1 has-text-right">100 BNB</div>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Amount (max: 2 BNB)</label>
                                                    <div className="control">

                                                        <input value={this.state.buy} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.buy })} id="buy" name="buy" type="number" placeholder="0.0" />

                                                        <div className="invalid-feedback">{this.state.formErrors.buy}</div>
                                                        <p className="help is-info">You will receive: 1,700 www</p>
                                                    </div>
                                                    
                                                </div><button disabled="" type="button" className="btn btn-primary"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg><span className="ml-2">Buy</span></button></form>
                                        </div>
                                    </div>
                                    <div style={{height: '24px'}}></div>
                                    <div className="ant-card ant-card-bordered">
                                        <div className="ant-card-body">
                                            <div className="table-container">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Status</td>
                                                            <td className="has-text-right has-text-primary">incoming</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sale type</td>
                                                            <td className="has-text-right has-text-primary">Public</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Minimum Buy</td>
                                                            <td className="has-text-right">1 BNB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Maximum Buy</td>
                                                            <td className="has-text-right">2 BNB</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{height: '24px'}}></div>
                                    <div className="ant-card ant-card-bordered">
                                        <div className="ant-card-head">
                                            <div className="ant-card-head-wrapper">
                                                <div className="ant-card-head-title">Owner Zone</div>
                                            </div>
                                        </div>
                                        <div className="ant-card-body">
                                            <div data-show="true" className="ant-alert ant-alert-warning ant-alert-no-icon" role="alert">
                                                <div className="ant-alert-content">
                                                    <div className="ant-alert-message">To make sure there will be no issues during the presale time, please don't send tokens to wallets before you finalize the presale pool.</div>
                                                    <div className="ant-alert-description"></div>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="field"><label htmlFor="" className="label">Sale Type</label>
                                                    <div className="ant-radio-group ant-radio-group-solid" style={{width: '100%', display: 'flex'}}><label className="ant-radio-wrapper ant-radio-wrapper-checked" style={{flex: '110%', textAlign: 'center'}}><span className="ant-radio ant-radio-checked"><input type="radio" className="ant-radio-input" value="public" readOnly /><span className="ant-radio-inner"></span></span><span>Public</span></label>
                                                        <label className="ant-radio-wrapper" style={{flex: '110%', textAlign: 'center'}}><span className="ant-radio"><input type="radio" className="ant-radio-input" value="whitelist" /><span className="ant-radio-inner"></span></span><span>Whitelist</span></label>
                                                        <label className="ant-radio-wrapper" style={{flex: '110%', textAlign: 'center'}}><span className="ant-radio"><input type="radio" className="ant-radio-input" value="condition" /><span className="ant-radio-inner"></span></span><span>Public Anti-Bot</span></label>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div><label htmlFor="" className="label">Pool Actions</label>
                                            <div className="my-2"><button disabled="" type="button" className="ant-btn ant-btn-default ant-btn-block ant-btn-dangerous"><span>Finalize Pool</span></button></div>
                                            <div className="my-2"><button type="button" className="ant-btn ant-btn-default ant-btn-block ant-btn-dangerous"><span>Cancel Pool</span></button></div>
                                            <p className="has-text-info mt-1 is-size-7">To Finalize presale, you have to exclude token transfer fee for presale contract.</p>
                                        </div>
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

export default PadInfo;
