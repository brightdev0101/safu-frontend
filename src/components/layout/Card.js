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
                    <p className="title"><span><strong>{props.title}</strong></span></p>
                    <p className="subtitle">1 BNB = {props.rate}{props.symbol}</p>
                </div>
                <div className="soft-hard-cap">
                    <p>Soft/Hard Cap:</p><span>{props.softCap} BNB - {props.hardCap} BNB</span>
                </div>
                <div className="content-progress">
                    {/* <p>
                        <strong>Progress ({pro}%)</strong></p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:'70%'}}>{pro}%</div>
                    </div> */}
                    <div className="sub-title is-flex is-align-items-center">
                        <div className="is-flex-grow-1">{props.minBuy} BNB</div>
                        <div className="is-flex-grow-1 has-text-right">{props.maxBuy} BNB</div>
                    </div>
                </div>
                {/* <div className="liquidity-percent">
                    <div className="is-flex is-align-items-center">
                        <p className="is-flex-grow-1">Liquidity %:</p><span className="is-flex-grow-1 has-text-right time-text">{liquidity}</span></div>
                </div>
                <div className="lockup-time" style={{margin: '0px 0px 1.5rem'}}>
                    <div className="is-flex is-align-items-center">
                        <p className="is-flex-grow-1">Lockup Time:</p><span className="is-flex-grow-1 has-text-right time-text">{lockupTime}</span></div>
                </div> */}
                <div className="custom-card-footer">
                    <div className="is-flex is-align-items-center">
                        {/* <div className="countdown is-flex-grow-1 is-flex-direction-column">
                            <div>Sale Ends In:</div>
                            <div className="countdown-text"><strong><span>{date}</span><span className="dotdot">:</span><span>{hour}</span><span className="dotdot">:</span><span>{minute}</span><span className="dotdot">:</span><span>{second}</span></strong></div>
                        </div> */}
                        <div className="countdown is-flex-grow-1 is-flex-direction-column">
                            <div>From:</div>
                            <div className="countdown-text"><strong><span>{props.from}</span></strong></div>
                        </div>
                        <div className="countdown is-flex-grow-1 is-flex-direction-column">
                            <div>To:</div>
                            <div className="countdown-text"><strong><span>{props.to}</span></strong></div>
                        </div>
                    </div>
                </div><br/>
                  <div className="view-pool has-text-right">
                      <a className="view-button" href="/PadInfo" >
                      {/* 0xaCD587c5dB11796682F6B1C9d88Cd08DB3bAEE50?chain=BSC-Test"> */}
                          <span className="btn btn-primary rounded-pill"  style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}>View Pool</span>
                      </a>
                  </div>
            </div>
        </div>
      </div>
    );
  }

export default Card;
