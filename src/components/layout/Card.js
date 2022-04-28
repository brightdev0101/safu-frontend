import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

function Card(props) {
    return (
        <div className="col-lg-3 col-xxl-4 mb-5">
        <div className="card bg-light border-0 h-100">
            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                {/* <figure className="media-left">
                    <p className="image">
                        <img className="card-img-top" src={src} style={{filter: 'grayscale(0)', width: '30%', height: 'auto'}} ></img>
                    </p>
                </figure> */}
                {/* <div className="media-content">
                    <div className="is-flex is-justify-content-flex-end">
                        <div className="is-flex has-text-right is-flex-direction-column">
                            <div className="is-flex">
                                <span className="is-flex status-dot inprogress"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 8 8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg><span>{status}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="content-title">
                <h2><p className="title"><span><strong>{props.title}</strong></span></p></h2>
                    <p className="subtitle">1 BNB = {props.rate}{props.symbol}</p>
                </div>
                <div className="soft-hard-cap">
                    <p>SoftCap: <span>{props.softCap} BNB </span></p>
                    <p>HardCap: <span>{props.hardCap} BNB </span></p>
                </div>
                <div className="soft-hard-cap">
                    <p>MinBuy:{props.minBuy} BNB</p>
                    <p>MaxBuy:{props.maxBuy} BNB</p>
                </div>
                <div className="soft-hard-cap">
                    <p>From:<strong><span>{props.from}</span></strong></p>
                    <p>To:<strong><span>{props.to}</span></strong></p>
                </div>
                
                {/* <div className="liquidity-percent">
                    <div className="is-flex is-align-items-center">
                        <p className="is-flex-grow-1">Liquidity %:</p><span className="is-flex-grow-1 has-text-right time-text">{liquidity}</span></div>
                </div>
                <div className="lockup-time" style={{margin: '0px 0px 1.5rem'}}>
                    <div className="is-flex is-align-items-center">
                        <p className="is-flex-grow-1">Lockup Time:</p><span className="is-flex-grow-1 has-text-right time-text">{lockupTime}</span></div>
                </div> */}
                
            </div>
        </div>
      </div>
    );
  }

export default Card;
