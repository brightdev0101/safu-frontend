import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card.js";

class Pads extends Component {
  render() {
    const { pads } = this.props;

    return pads.map(pad => <Card title={pad.title} 
                                symbol={pad.symbol} 
                                rate={pad.rate} 
                                softCap={pad.softCap} 
                                hardCap={pad.hardCap} 
                                minBuy={pad.minBuy} 
                                maxBuy={pad.maxBuy} 
                                from = {pad.from}
                                to = {pad.to}
                            />);
  }
}

Pads.propTypes = {
  pads: PropTypes.array.isRequired
};

export default Pads;
