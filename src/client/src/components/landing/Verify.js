import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classnames from "classnames";
import "./styles.css";

class Verify extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tokenAddress: '',
            formErrors: {tokenAddress: ''},
            tokenAddressValid: false,
            formValid: false
        };
    }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value)});
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let tokenAddressValid = this.state.tokenAddressValid;
      
        switch(fieldName) {
          case 'tokenAddress':
            tokenAddressValid =  value.match(/^[xX]?[0-9a-zA-Z]{6}$/);
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
        
        return (
            <>
                <section className="ant-layout">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                        <div className="py-6 container">
                            
                            <div style={{height: '16px'}}></div>

                            <div className="ant-card ant-card-bordered">
                                <div className="ant-card-body">
                                    <h1 className="display-4 text-center">Verify Token</h1>
                                    <p className="lead text-center">
                                        <i>Enter the token address and verify</i>
                                    </p>
                                    <form>
                                        <p className="has-text-primary is-size-7">(*) is required field.</p>
                                        
                                        <div className="field">
                                            <div className="row is-flex is-align-items-center mb-2 flex-wrap">
                                                <div className="is-flex-grow-1 mr-4"><label className="label" htmlFor="tokenAddress">Token address<sup className="has-text-danger">*</sup></label></div>
                                                
                                                <div className="mt-2">
                                                    <Link to="/createToken" className="btn btn-success"><span>Create token</span></Link>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input name="tokenAddress" value={this.state.tokenAddress} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.tokenAddress })} type="text" placeholder="Ex: 0x..." id="tokenAddress" autoComplete="off"/>

                                                <div className="invalid-feedback">{this.state.formErrors.tokenAddress}</div>
                                                <p className="help is-info">Create pool fee: 0.01 BNB</p>
                                            </div>
                                        </div>
                                        <div className="has-text-centered" ><Link to={this.state.formValid?'/2launchpad':'#'} className="btn btn-primary"><span>Next</span></Link></div>
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
Verify.propTypes = {
    // profile: PropTypes.object.isRequired,
    // errors: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    // profile: state.profile,
    // errors: state.errors
});
  
export default connect(
    mapStateToProps,
    {  }
)(withRouter(Verify));