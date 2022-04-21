import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { getVerify } from "../../actions/verifyActions";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "./styles.css";

class LaunchPad1 extends Component {
    constructor (props) {
        super(props);
        // this.state = JSON.parse(window.localStorage.getItem('state')) || {
        //     tokenAddress: '',
        //     formErrors: {tokenAddress: ''},
        //     tokenAddressValid: false,
        //     formValid: false
        // };
        this.state = {
            tokenAddress: '',
            formErrors: {tokenAddress: ''},
            tokenAddressValid: false,
            formValid: false
        };
        console.log(this.state.tokenAddress);
    }

    // setState(state) {
    //     window.localStorage.setItem('state', JSON.stringify(state));
    //     super.setState(state);
    //   }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value)});
        this.props.verifyShare(this.state.tokenAddress)
        console.log("**************"+this.props.verifyShare(this.state.tokenAddress))
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let tokenAddressValid = this.state.tokenAddressValid;
      
        switch(fieldName) {
          case 'tokenAddress':
            tokenAddressValid =  value.match(/^(0x[0-9a-f]{2})(,0x[0-9a-f]{2})*$/i);
            fieldValidationErrors.tokenAddress = tokenAddressValid ? '' : ' is invalid';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        tokenAddressValid: tokenAddressValid
                    }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.tokenAddressValid});
    }

    render() {
        console.log("com====>"+this.props.tokenAddress);
        return (
            <>
                <section className="ant-layout black-background">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                        <div className="py-6 container">
                            
                            <div style={{height: '16px'}}></div>

                            <div className="bg-dark  style-border ant-card ant-card-bordered">
                                <div className="ant-card-body">
                                    <h1 className="socials text-center">Verify Token{this.props.tokenAddress}</h1>
                                    <p className="lead text-center">
                                        <i>Enter the token address and verify</i>
                                    </p>
                                    <form>
                                        <p className="has-text-primary is-size-7">(*) is required field.</p>
                                        
                                        <div className="field">
                                            <div className="row is-flex is-align-items-center mb-2 flex-wrap">
                                                <div className="is-flex-grow-1 mr-4"><label className="label" htmlFor="tokenAddress">Token address<sup className="has-text-danger">*</sup></label></div>
                                                
                                                <div className="mt-2">
                                                    <a href="/CreateToken" className="btn btn-success"><span>Create token</span></a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input name="tokenAddress" value={this.state.tokenAddress} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.tokenAddress })} type="text" placeholder="Ex: 0x..." id="tokenAddress" autoComplete="off"/>

                                                <div className="invalid-feedback">{this.state.formErrors.tokenAddress}</div>
                                                <p className="help is-info">Create pool fee: 0.01 BNB</p>
                                            </div>
                                        </div>
                                        <div className="has-text-centered" ><a href={this.state.formValid?'/LaunchPad2':'/LaunchPad2'} className="btn btn-primary"><span>Next</span></a></div>
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
LaunchPad1.propTypes = {
    // tokenAddress: PropTypes.string.isRequired,
    // getVerify: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    console.log("componentstate====>"+state.verify.tokenAddress);
    return ({
    tokenAddress: state.verify.tokenAddress
})};
  
const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ verifyShare: getVerify }, dispatch);
}
  
export default connect(
    mapStateToProps,
    mapDistachToProps
)(LaunchPad1);