
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classnames from "classnames";
import isEmpty from "../../validation/isEmpty";

import "./styles.css";

class Finish extends Component {
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

    render() {
        
        return (
            <>
                <section className="ant-layout">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                    <div className="py-6 container">
                        <div style={{height: '16px'}}></div>
                        <div className="ant-card ant-card-bordered">
                            <div className="ant-card-body">
                                <h1 className="display-4 text-center">Finish</h1>
                                <p className="lead text-center">
                                    <i>Review your information</i>
                                </p>
                                <form onSubmit={this.onSubmit}>
                                    <div className="table-container">
                                        <div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Total token</td>
                                                        <td className="has-text-primary has-text-right">1,070,960 www</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Token name</td>
                                                        <td className="has-text-info has-text-right">3w</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Token symbol</td>
                                                        <td className="has-text-info has-text-right">www</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Token decimals</td>
                                                        <td className="has-text-info has-text-right">18</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Presale rate</td>
                                                        <td className="has-text-info has-text-right">10000 www</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Listing rate</td>
                                                        <td className="has-text-info has-text-right">1000 www</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sale method</td>
                                                        <td className="has-text-info has-text-right">Public</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Softcap</td>
                                                        <td className="has-text-info has-text-right">50 BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hardcap</td>
                                                        <td className="has-text-info has-text-right">100 BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unsold tokens</td>
                                                        <td className="has-text-info has-text-right">Burn</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Minimum buy</td>
                                                        <td className="has-text-info has-text-right">1 BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Maximum buy</td>
                                                        <td className="has-text-info has-text-right">2 BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Liquidity</td>
                                                        <td className="has-text-info has-text-right">52%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Start time</td>
                                                        <td className="has-text-info has-text-right">2022-04-05T22:52 (UTC)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>End time</td>
                                                        <td className="has-text-info has-text-right">2022-04-06T22:52 (UTC)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Liquidity lockup time</td>
                                                        <td className="has-text-info has-text-right">10 minutes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Website</td>
                                                        <td className="has-text-info has-text-right"><a href="https://imgur.com/a/21hZVyO" target="_blank" rel="nofollow noreferrer">https://imgur.com/a/21hZVyO</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                    <div className="has-text-centered">
                                        <Link to="/3addInfo" className="btn btn-secondary"><span>Back</span></Link><span className="mr-4"></span><button type="submit" className="btn btn-danger"><span>Submit</span></button>
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

export default Finish;
