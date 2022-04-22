import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classnames from "classnames";
import isEmpty from "../../validation/isEmpty";
import "./styles.css";


class LaunchPad2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            presaleRate: 0,
            // optradio: false,
            softCap: 0,
            hardCap: 0,
            minBuy: 0,
            maxBuy: 0,
            liquidity: 0,
            // listingRate: 0,
            // router: '',

            from: '',
            to: '',
            liquidityLockTime: 0,
            // vestContributor: false,
            // teamVesting: false,
            formErrors: {
                presaleRate: 0,
                softCap: 0,
                hardCap: 0,
                minBuy: 0,
                maxBuy: 0,
                liquidity: 0,
                // listingRate: 0,
                liquidityLockTime: 0,
                from: '',
                to: '',
                // router: ''
            },
            presaleRateValid: false,
            softCapValid: false,
            hardCapValid: false,
            minBuyValid: false,
            maxBuyValid: false,
            liquidityValid: false,
            listingRateValid: false,
            fromValid: false,
            toValid: false,
            // routerValid: false,
            liquidityLockTimeValid: false,

            formValid: false
        };
    }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value)});
        // window.localStorage.setItem(name, JSON.stringify(value));
        // window.localStorage.name = value;
        window.localStorage.setItem(name, value);
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;

        let presaleRateValid = this.state.presaleRateValid;
        let softCapValid = this.state.softCapValid;
        let hardCapValid = this.state.hardCapValid;
        let minBuyValid = this.state.minBuyValid;
        let maxBuyValid = this.state.maxBuyValid;
        let liquidityValid = this.state.liquidityValid;
        // let listingRateValid = this.state.listingRateValid;
        let fromValid = this.state.fromValid;
        let toValid = this.state.toValid;
        // let routerValid = this.state.routerValid;

        let liquidityLockTimeValid = this.state.liquidityLockTimeValid;
      
        switch(fieldName) {
            case 'presaleRate':
                presaleRateValid =  value > 0;
                fieldValidationErrors.presaleRate = presaleRateValid ? '' : ' is invalid';
                break;
            case 'softCap':
                softCapValid =  value > 0;
                fieldValidationErrors.softCap = softCapValid ? '' : ' is invalid';
                break;
            case 'hardCap':
                hardCapValid =  value > 0;
                fieldValidationErrors.hardCap = hardCapValid ? '' : ' is invalid';
                break;
            case 'minBuy':
                minBuyValid =  value > 0;
                fieldValidationErrors.minBuy = minBuyValid ? '' : ' is invalid';
                break;
            case 'maxBuy':
                maxBuyValid =  value > 0;
                fieldValidationErrors.maxBuy = maxBuyValid ? '' : ' is invalid';
                break;
            case 'liquidity':
                liquidityValid =  value > 0;
                fieldValidationErrors.liquidity = liquidityValid ? '' : ' is invalid';
                break;
            // case 'listingRate':
            //     listingRateValid =  value > 0;
            //     fieldValidationErrors.listingRate = listingRateValid ? '' : ' is invalid';
            //     break;
            case 'from':
                fromValid = isEmpty(value) ? '' : 'have value';
                fieldValidationErrors.from = fromValid ? '' : 'must have start time.';
                break;
            case 'to':
                toValid = isEmpty(value) ? '' : 'have value';
                fieldValidationErrors.to = toValid ? '' : 'must have end time.';
                fieldValidationErrors.to = this.state.to > this.state.from ? '' : 'start time must be greater than end time.'; 

                break;
            // case 'router':
            //     routerValid = value == '---Select Router Exchange---' ? '' : 'select router';
            //     fieldValidationErrors.router = routerValid ? '' : 'select router';
            //     break;
            case 'liquidityLockTime':
                liquidityLockTimeValid =  value > 0;
                fieldValidationErrors.liquidityLockTime = liquidityLockTimeValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        presaleRateValid: presaleRateValid,
                        softCapValid: softCapValid,
                        hardCapValid: hardCapValid,
                        minBuyValid: minBuyValid,
                        maxBuyValid: maxBuyValid,
                        liquidityValid: liquidityValid,
                        // listingRateValid: listingRateValid,
                        liquidityLockTimeValid: liquidityLockTimeValid,
                        // routerValid: routerValid,
                        fromValid: fromValid,
                        toValid: toValid
                    }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.presaleRateValid  && this.state.softCapValid && this.state.hardCapValid && this.state.minBuyValid && this.state.maxBuyValid && this.state.liquidityValid && this.state.liquidityLockTimeValid });
    }
      
    render(){

        return (
            <>
                <section className="ant-layout  black-background">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                        <div className="py-6 container">
                            <div style={{height: '16px'}}></div>
                            <div className="bg-dark style-border  ant-card ant-card-bordered">
                                <div className="ant-card-body">
                                    <h1 className="socials text-center">Launchpad Info</h1>
                                    <p className="lead text-center">
                                        <i>Enter the launchpad information that you want to raise , that should be enter all details about your presale</i>
                                    </p>
                                    
                                    <form>
                                        <p className="has-text-primary is-size-7">(*) is required field.</p>
                                        <div className="field"><label className="label" htmlFor="presaleRate">Presale rate<sup className="has-text-danger">*</sup></label>
                                            <div className="control"><input className={classnames("form-control form-control-lg", {
                                            "is-invalid": this.state.formErrors.presaleRate })} type="number" placeholder="100" id="presaleRate" name="presaleRate" autoComplete="on" value={this.state.presaleRate} onChange={(event) => this.handleInput(event)} />
                                                <div className="invalid-feedback">{this.state.formErrors.presaleRate}</div>
                                                
                                                <p className="help is-info">If I spend 1 BNB how many tokens will I receive?</p>
                                            </div>
                                        </div>
                                        {/* <div className="field"><label htmlFor="" className="label">Whitelist</label>
                                            <div className="ant-radio-group ant-radio-group-outline">
                                                <div className="row ml-1 ant-space ant-space-horizontal ant-space-align-center" style={{gap: '28px'}}>
                                                    <div className="form-check">
                                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="false" checked={this.state.optradio ==='false'? false: true}
                                                        onChange={(event) => this.handleInput(event)}/>Disabled
                                                        <label className="form-check-label" htmlFor="radio1"></label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="true" checked={this.state.optradio === 'true'?true: false}
                                                        onChange={(event) => this.handleInput(event)} />Enabled
                                                        <label className="form-check-label" htmlFor="radio2"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="has-text-info is-size-7">You can enable/disable whitelist anytime</p>
                                        </div> */}
                                        <div className="columns mb-0">
                                            <div className="column pb-0">
                                                <div className="field"><label className="label" htmlFor="softCap">Softcap (BNB)<sup className="has-text-danger">*</sup></label>
                                                    <div className="control"><input className={classnames("form-control form-control-lg", {
                                            "is-invalid": this.state.formErrors.softCap })} type="number" placeholder="Ex: 10" id="softCap" name="softCap" autoComplete="on" value={this.state.softCap} onChange={(event) => this.handleInput(event)}   />
                                                        <div className="invalid-feedback">{this.state.formErrors.softCap}</div>
                                                        <p className="help is-info">Softcap must be &gt;= 50% of Hardcap!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column pb-0">
                                                <div className="field"><label className="label" htmlFor="hardCap">HardCap (BNB)<sup className="has-text-danger">*</sup></label>
                                                    <div className="control"><input className={classnames("form-control form-control-lg", {
                                            "is-invalid": this.state.formErrors.hardCap })} type="number" placeholder="Ex: 10" id="hardCap" name="hardCap" autoComplete="on" value={this.state.hardCap} onChange={(event) => this.handleInput(event)}  />
                                                        <div className="invalid-feedback">{this.state.formErrors.hardCap}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column">
                                                <div className="field"><label className="label" htmlFor="minBuy">Minimum buy (BNB)<sup className="has-text-danger">*</sup></label>
                                                    <div className="control"><input className={classnames("form-control form-control-lg", {
                                            "is-invalid": this.state.formErrors.minBuy })} type="number" placeholder="0.1 BNB" id="minBuy" name="minBuy" autoComplete="on" value={this.state.minBuy} onChange={(event) => this.handleInput(event)} /></div>
                                                        <div className="invalid-feedback">{this.state.formErrors.minBuy}</div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field"><label className="label" htmlFor="maxBuy">Maximum buy (BNB)<sup className="has-text-danger">*</sup></label>
                                                    <div className="control"><input className={classnames("form-control form-control-lg", {
                                            "is-invalid": this.state.formErrors.maxBuy })} type="number" placeholder="0.2 BNB" id="maxBuy" name="maxBuy" autoComplete="on" value={this.state.maxBuy} onChange={(event) => this.handleInput(event)}  />
                                                        <div className="invalid-feedback">{this.state.formErrors.maxBuy}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="columns">
                                            <div className="column">
                                                <div className="field">
                                                    <label className="label" htmlFor="refundType">Refund type</label>
                                                    <div className="form-group">
                                                        <select
                                                            className={classnames("form-control form-control-lg")}
                                                            name="refundType"
                                                            value={this.state.refundType}
                                                            onChange={(event) => this.handleInput(event)}
                                                        >
                                                            <option>Refund</option>
                                                            <option>Burn</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="field"><label className="label" htmlFor="router">Router<sup className="has-text-danger">*</sup></label>
                                                    <div className="form-group">
                                                        <select
                                                            className={classnames("form-control form-control-lg", {
                                                            "is-invalid": this.state.formErrors.router
                                                            })}
                                                            name="router"
                                                            value={this.state.router}
                                                            onChange={(event) => this.handleInput(event)}
                                                            
                                                        >
                                                            <option>---Select Router Exchange---</option>
                                                            <option>Pancakeswap</option>
                                                            <option>PinkSwap Testnet</option>

                                                        </select>
                                                        <div className="invalid-feedback">{this.state.formErrors.router}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="columns">
                                            <div className="column">
                                                <div className="field"><label className="label" htmlFor="liquidity"> liquidity (%)<sup className="has-text-danger">*</sup></label>
                                                    <div className="control"><input className={classnames("form-control form-control-lg", {
                                            "is-invalid": this.state.formErrors.liquidity })} type="number" placeholder="Ex: 52" id="liquidity" name="liquidity" autoComplete="on" value={this.state.liquidity} onChange={(event) => this.handleInput(event)}  />
                                                        <div className="invalid-feedback">{this.state.formErrors.liquidity}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="column">
                                                <div className="field"><label className="label" htmlFor="listingRate"> listing rate<sup className="has-text-danger">*</sup></label>
                                                    <div className="control"><input className={classnames("form-control form-control-lg", {
                                            "is-invalid": this.state.formErrors.listingRate })} type="number" placeholder="Ex: 500" id="listingRate" name="listingRate" autoComplete="on" value={this.state.listingRate} onChange={(event) => this.handleInput(event)} />
                                                        <div className="invalid-feedback">{this.state.formErrors.listingRate}</div>
                                                        <p className="help is-info">1 BNB = 0 www</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        {/* <ul className="mb-4">
                                            <li>
                                                <p className="help is-info">Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)</p>
                                            </li>
                                            <li>
                                                <p className="help is-info">If I spend 1 BNB on how many tokens will I receive? Usually this amount is lower than presale rate to allow for a higher listing price on </p>
                                            </li>
                                        </ul> */}
                                        <div className="field"><label className="label" htmlFor="startTime">Select start time &amp; end time (UTC)<sup className="has-text-danger">*</sup></label>
                                            <div className="columns mb-0">
                                                <div className="column"><label className="label" htmlFor="startTime">Start time (UTC)<sup className="has-text-danger">*</sup></label>
                                                    <input 
                                                        type="date"
                                                        className={classnames("form-control form-control-lg", { "is-invalid": this.state.formErrors.from })}
                                                        name="from"
                                                        value={this.state.from}
                                                        onChange={(event) => this.handleInput(event)}
                                                    />
                                                    <div className="invalid-feedback">{this.state.formErrors.from}</div>
                                                </div>
                                                <div className="column"><label className="label" htmlFor="endTime">End time (UTC)<sup className="has-text-danger">*</sup></label>
                                                    <input 
                                                        className={classnames("form-control form-control-lg", { "is-invalid": this.state.formErrors.to })}
                                                        name="to"
                                                        type="date"
                                                        value={this.state.to}
                                                        onChange={(event) => this.handleInput(event)}
                                                    />
                                                    <div className="invalid-feedback">{this.state.formErrors.to}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field"><label className="label" htmlFor="liquidityLockTime">Liquidity lockup (minutes)<sup className="has-text-danger">*</sup></label>
                                            <div className="control"><input className={classnames("form-control form-control-lg", {
                                            "is-invalid": this.state.formErrors.liquidityLockTime })} type="number" placeholder="30 days" id="liquidityLockTime" name="liquidityLockTime" autoComplete="on" value={this.state.liquidityLockTime} onChange={(event) => this.handleInput(event)}  />
                                                <div className="invalid-feedback">{this.state.formErrors.liquidityLockTime}</div>
                                            </div>
                                        </div>
                                        
                                        <div className="has-text-centered">
                                            <div className="has-text-info p-4">Need 0 www to create launchpad.</div><a href="/LaunchPad1" className="btn btn-secondary"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Back</span></a><span className="mr-4"></span><a href={this.state.formValid?'/LaunchPad3':'#'} className="btn btn-primary"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Next</span></a>
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

const mapStateToProps = state => {
    return ({
    tokenAddress: state.verify.tokenAddress
})};
  

export default connect(
    mapStateToProps
)(LaunchPad2);