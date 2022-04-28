import React, {Component} from 'react';
import Pads from "./Pads";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPads } from "../../actions/padActions";

class PadList extends Component {

    componentDidMount() {
        this.props.getPads();
    }

    render(){

        const { pads, loading } = this.props.pad;
        let postContent;

        postContent = <Pads pads={pads} />;

        return (
            <>
            <section className="pt-4 black-background">
                <div className="container px-lg-5 " >
                    <div className="bg-dark style-border p-4 p-lg-5  white-font rounded-3 text-center">
                        <div className="m-4 m-lg-5 ">
                            <h1 className="socials fw-bold">Current Presale</h1>
                            <p className="fs-4">Presales are usually sold from a separate allocation of seats, which may not be the same as the tickets being released to the general public.</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter token name or token symbol." />
                                <button className="btn btn-success" style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}} type="text">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-5 ml-3 mr-1" style={{}}>
                   {postContent}
                </div>
            </section>
            </>
        );
    }
   
};

PadList.propTypes = {
    getPads: PropTypes.func.isRequired,
    pad: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    pad: state.pad
});

export default connect(mapStateToProps, { getPads })(PadList);