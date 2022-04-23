import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classnames from "classnames";
import isEmpty from "../../validation/isEmpty";

import "./styles.css";

class LaunchPad3 extends Component {
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
    }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value)});
        window.localStorage.setItem(name, value);
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let logoUrlValid = this.state.logoUrlValid;
        let websiteValid = this.state.websiteValid;
      
        switch(fieldName) {
            case 'logoUrl':
                logoUrlValid = isEmpty(value) ? '' : 'have url';
                fieldValidationErrors.logoUrl = logoUrlValid ? '' : 'must input logo url.';
                logoUrlValid =  value.match(/^((http|https):\/\/)/);
                fieldValidationErrors.logoUrl = logoUrlValid ? '' : ' is invalid';
                break;
            case 'website':
                websiteValid = isEmpty(value) ? '' : 'have url';
                logoUrlValid =  value.match(/^((http|https):\/\/)/);
                fieldValidationErrors.website = websiteValid ? '' : 'must input website url.';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        logoUrlValid: logoUrlValid,
                        websiteValid: websiteValid,
                    }, this.validateForm);
    }
      
    validateForm() {
        this.setState({formValid: this.state.logoUrlValid && this.state.websiteValid });
    }

    render() {
        
        return (
            <>
                <section className="ant-layout black-background">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                        <div className="py-6 container">
                            
                            <div style={{height: '16px'}}></div>

                            <div className="bg-dark style-border ant-card ant-card-bordered">
                                <div className="ant-card-body">
                                    <h1 className="socials text-center">Additional Info</h1>
                                    <p className="lead text-center">
                                        <i>Let people know who you are</i>
                                    </p>
                                    <form>
                                        <p className="has-text-primary is-size-7">(*) is required field.</p>
                                        <div className="columns field">
                                            <div className="column">
                                                <label className="label" htmlFor="logoUrl">Logo URL<sup className="has-text-danger">*</sup></label>
                                                <div className="form-group">
                                                    <input value={this.state.logoUrl} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.logoUrl })} type="text" placeholder="Ex: https://..." id="logoUrl" name="logoUrl" autoComplete="off"/>

                                                    <div className="invalid-feedback">{this.state.formErrors.logoUrl}</div>
                                                    <p className="help is-info">URL must end with a supported image extension png, jpg, jpeg or gif. </p>
                                                </div>
                                                
                                            </div>
                                            <div className="column">
                                                <label className="label" htmlFor="website">Website<sup className="has-text-danger">*</sup></label>
                                                <div className="form-group">
                                                    <input value={this.state.website} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.website })} type="text" placeholder="Ex: https://..." id="website" name="website" autoComplete="off"/>

                                                    <div className="invalid-feedback">{this.state.formErrors.website}</div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="columns field">
                                            <div className="column">
                                                <label className="label" htmlFor="facebook">Facebook</label>
                                                <div className="form-group">
                                                    <input value={this.state.facebook} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.facebook })} type="text" placeholder="Ex: https://facebook.com/..." id="facebook" name="facebook" autoComplete="off"/>
                                                </div>
                                            </div>

                                            <div className="column">
                                                <label className="label" htmlFor="twitter">Twitter</label>
                                                <div className="form-group">
                                                    <input value={this.state.twitter} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.twitter })} type="text" placeholder="Ex: https://twitter.com/..." id="twitter" name="twitter" autoComplete="off"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="columns field">
                                            <div className="column">
                                                <label className="label" htmlFor="github">Github</label>
                                                <div className="form-group">
                                                    <input value={this.state.github} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.github })} type="text" placeholder="Ex: https://github.com/..." id="github" name="github" autoComplete="off"/>
                                                </div>
                                            </div>

                                            <div className="column">
                                                <label className="label" htmlFor="telegram">Telegram</label>
                                                <div className="form-group">
                                                    <input value={this.state.telegram} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.telegram })} type="text" placeholder="Ex: https://t.me/..." id="telegram" name="telegram" autoComplete="off"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="columns field">
                                            <div className="column">
                                                <label className="label" htmlFor="instagram">Instagram</label>
                                                <div className="form-group">
                                                    <input value={this.state.instagram} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.instagram })} type="text" placeholder="Ex: https://instagram.com/..." id="instagram" name="instagram" autoComplete="off"/>
                                                </div>
                                            </div>

                                            <div className="column">
                                                <label className="label" htmlFor="discord">Discord</label>
                                                <div className="form-group">
                                                    <input value={this.state.discord} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.discord })} type="text" placeholder="Ex: https://t.me/..." id="discord" name="discord" autoComplete="off"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label" htmlFor="reddit">Reddit</label>
                                            <div className="form-group">
                                                <input value={this.state.reddit} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.reddit })} type="text" placeholder="Ex: https://reddit.com/..." id="reddit" name="reddit" autoComplete="off"/>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label" htmlFor="description">Description</label>
                                            <div className="form-group">
                                                <textarea value={this.state.descrition} onChange={(event) => this.handleInput(event)} className={classnames("form-control form-control-lg", {"is-invalid": this.state.formErrors.descrition })} type="text" placeholder="Ex: This is the best project..." id="description" name="description" />
                                            </div>
                                        </div>

                                        <div className="has-text-centered">
                                            <a href="/LaunchPad2" className="btn btn-secondary"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Back</span></a><span className="mr-4"></span><a href={this.state.formValid?'/LaunchPad4':'#'} className="btn btn-primary"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Next</span></a>
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
LaunchPad3.propTypes = {
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
)(withRouter(LaunchPad3));