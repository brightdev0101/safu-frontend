import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";

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
        const tokenAddress = this.props.tokenAddress;
        return (
            <>
                <section className="ant-layout black-background">
                    <main className="ant-layout-content MainLayout_content__2mZF9">
                    <div className="py-6 container">
                        <div style={{height: '16px'}}></div>
                        <div className="bg-dark style-border ant-card ant-card-bordered">
                            <div className="ant-card-body">
                                <h1 className="socials text-center">Finish{tokenAddress}</h1>
                                <p className="lead text-center">
                                    <i>Review your information</i>
                                </p>
                                <form onSubmit={this.onSubmit}>
                                    <div className="table-container">
                                        <div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td width="50%">Total token</td>
                                                        <td className="has-text-primary has-text-right">1,070,960 www</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Token name</td>
                                                        <td className="has-text-info has-text-right">3w</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Token symbol</td>
                                                        <td className="has-text-info has-text-right">www</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Token decimals</td>
                                                        <td className="has-text-info has-text-right">18</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Presale rate</td>
                                                        <td className="has-text-info has-text-right">10000 www</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Listing rate</td>
                                                        <td className="has-text-info has-text-right">1000 www</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Sale method</td>
                                                        <td className="has-text-info has-text-right">Public</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Softcap</td>
                                                        <td className="has-text-info has-text-right">50 BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Hardcap</td>
                                                        <td className="has-text-info has-text-right">100 BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Unsold tokens</td>
                                                        <td className="has-text-info has-text-right">Burn</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Minimum buy</td>
                                                        <td className="has-text-info has-text-right">1 BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Maximum buy</td>
                                                        <td className="has-text-info has-text-right">2 BNB</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Liquidity</td>
                                                        <td className="has-text-info has-text-right">52%</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Start time</td>
                                                        <td className="has-text-info has-text-right">2022-04-05T22:52</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">End time</td>
                                                        <td className="has-text-info has-text-right">2022-04-06T22:52</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Liquidity lockup time</td>
                                                        <td className="has-text-info has-text-right">10 minutes</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%">Website</td>
                                                        <td className="has-text-info has-text-right"><a href="https://imgur.com/a/21hZVyO" target="_blank" rel="nofollow noreferrer">https://imgur.com/a</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                    <div className="has-text-centered">
                                        <a href="/LaunchPad3" className="btn btn-secondary"><span>Back</span></a><span className="mr-4"></span><button type="submit" className="btn btn-danger"><span>Submit</span></button>
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
