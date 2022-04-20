import React from 'react';
import { Link } from 'react-router-dom';
// import '../../assets/css/main_chunk.css';
import Card from "./Card";

const PadList = () => {
  
  return (
    
    <section className="pt-4 black-background">
        <div className="container px-lg-5 " >
            <div className="bg-dark style-border p-4 p-lg-5  white-font rounded-3 text-center">
                <div className="m-4 m-lg-5 ">
                    <h1 className="socials fw-bold">Current Presale</h1>
                    <p className="fs-4">Presales are usually sold from a separate allocation of seats, which may not be the same as the tickets being released to the general public.</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter token name or token symbol." />
                        <button className="btn btn-success" type="text">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row gx-lg-5 ml-3 mr-1" style={{}}>
            <Card title='WWW' status='Live'/>
            <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <figure className="media-left">
                            <p className="image">
                                <img className="card-img-top" src="https://i.postimg.cc/Vs9zFvQ5/20220404-104138-0000.png" style={{filter: 'grayscale(0)', width: '30%', height: 'auto'}} ></img>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="is-flex is-justify-content-flex-end">
                                <div className="is-flex has-text-right is-flex-direction-column">
                                    <div className="is-flex">
                                        <span className="is-flex status-dot inprogress"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 8 8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg><span> Sale Live</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-title">
                            <p className="title"><span>Madicoin</span></p>
                            <p className="subtitle">1 BNB = 10,000 MDC</p>
                        </div>
                        <div className="soft-hard-cap">
                            <p>Soft/Hard Cap:</p><span>10 BNB - 10 BNB</span>
                        </div>
                        <div className="content-progress">
                            <p>
                                <strong>Progress (70.00%)</strong></p>
                            <div className="progress">
                                <div className="progress-bar" style={{width:'70%'}}>70%</div>
                            </div>
                            <div className="sub-title is-flex is-align-items-center">
                                <div className="is-flex-grow-1">0 BNB</div>
                                <div className="is-flex-grow-1 has-text-right">10 BNB</div>
                            </div>
                        </div>
                        <div className="liquidity-percent">
                            <div className="is-flex is-align-items-center">
                                <p className="is-flex-grow-1">Liquidity %:</p><span className="is-flex-grow-1 has-text-right time-text">52%</span></div>
                        </div>
                        <div className="lockup-time" style={{margin: '0px 0px 1.5rem'}}>
                            <div className="is-flex is-align-items-center">
                                <p className="is-flex-grow-1">Lockup Time:</p><span className="is-flex-grow-1 has-text-right time-text">24 minutes</span></div>
                        </div>
                        <div className="custom-card-footer">
                            <div className="is-flex is-align-items-center">
                                <div className="countdown is-flex-grow-1 is-flex-direction-column">
                                    <div>Sale Ends In:</div>
                                    <div className="countdown-text"><strong><span>00</span><span className="dotdot">:</span><span>05</span><span className="dotdot">:</span><span>50</span><span className="dotdot">:</span><span>14</span></strong></div>
                                </div>
                                <div className="view-pool has-text-right">
                                    <a className="view-button" href="/PadInfo">
                                    {/* 0xaCD587c5dB11796682F6B1C9d88Cd08DB3bAEE50?chain=BSC-Test"> */}
                                        <span className="badge rounded-pill bg-warning">View Pool</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <figure className="media-left">
                            <p className="image">
                                <img className="card-img-top" src="https://i.postimg.cc/Vs9zFvQ5/20220404-104138-0000.png" style={{filter: 'grayscale(0)', width: '30%', height: 'auto'}} ></img>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="is-flex is-justify-content-flex-end">
                                <div className="is-flex has-text-right is-flex-direction-column">
                                    <div className="is-flex">
                                        <span className="is-flex status-dot inprogress"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 8 8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg><span> Sale Live</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-title">
                            <p className="title"><span>Madicoin</span></p>
                            <p className="subtitle">1 BNB = 10,000 MDC</p>
                        </div>
                        <div className="soft-hard-cap">
                            <p>Soft/Hard Cap:</p><span>10 BNB - 10 BNB</span>
                        </div>
                        <div className="content-progress">
                            <p>
                                <strong>Progress (70.00%)</strong></p>
                            <div className="progress">
                                <div className="progress-bar" style={{width:'70%'}}>70%</div>
                            </div>
                            <div className="sub-title is-flex is-align-items-center">
                                <div className="is-flex-grow-1">0 BNB</div>
                                <div className="is-flex-grow-1 has-text-right">10 BNB</div>
                            </div>
                        </div>
                        <div className="liquidity-percent">
                            <div className="is-flex is-align-items-center">
                                <p className="is-flex-grow-1">Liquidity %:</p><span className="is-flex-grow-1 has-text-right time-text">52%</span></div>
                        </div>
                        <div className="lockup-time" style={{margin: '0px 0px 1.5rem'}}>
                            <div className="is-flex is-align-items-center">
                                <p className="is-flex-grow-1">Lockup Time:</p><span className="is-flex-grow-1 has-text-right time-text">24 minutes</span></div>
                        </div>
                        <div className="custom-card-footer">
                            <div className="is-flex is-align-items-center">
                                <div className="countdown is-flex-grow-1 is-flex-direction-column">
                                    <div>Sale Ends In:</div>
                                    <div className="countdown-text"><strong><span>00</span><span className="dotdot">:</span><span>05</span><span className="dotdot">:</span><span>50</span><span className="dotdot">:</span><span>14</span></strong></div>
                                </div>
                                <div className="view-pool has-text-right">
                                    <a className="view-button" href="/PadInfo">
                                    {/* 0xaCD587c5dB11796682F6B1C9d88Cd08DB3bAEE50?chain=BSC-Test"> */}
                                        <span className="badge rounded-pill bg-warning">View Pool</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <figure className="media-left">
                            <p className="image">
                                <img className="card-img-top" src="https://i.postimg.cc/Vs9zFvQ5/20220404-104138-0000.png" style={{filter: 'grayscale(0)', width: '30%', height: 'auto'}} ></img>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="is-flex is-justify-content-flex-end">
                                <div className="is-flex has-text-right is-flex-direction-column">
                                    <div className="is-flex">
                                        <span className="is-flex status-dot inprogress"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 8 8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg><span> Sale Live</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-title">
                            <p className="title"><span>Madicoin</span></p>
                            <p className="subtitle">1 BNB = 10,000 MDC</p>
                        </div>
                        <div className="soft-hard-cap">
                            <p>Soft/Hard Cap:</p><span>10 BNB - 10 BNB</span>
                        </div>
                        <div className="content-progress">
                            <p>
                                <strong>Progress (70.00%)</strong></p>
                            <div className="progress">
                                <div className="progress-bar" style={{width:'70%'}}>70%</div>
                            </div>
                            <div className="sub-title is-flex is-align-items-center">
                                <div className="is-flex-grow-1">0 BNB</div>
                                <div className="is-flex-grow-1 has-text-right">10 BNB</div>
                            </div>
                        </div>
                        <div className="liquidity-percent">
                            <div className="is-flex is-align-items-center">
                                <p className="is-flex-grow-1">Liquidity %:</p><span className="is-flex-grow-1 has-text-right time-text">52%</span></div>
                        </div>
                        <div className="lockup-time" style={{margin: '0px 0px 1.5rem'}}>
                            <div className="is-flex is-align-items-center">
                                <p className="is-flex-grow-1">Lockup Time:</p><span className="is-flex-grow-1 has-text-right time-text">24 minutes</span></div>
                        </div>
                        <div className="custom-card-footer">
                            <div className="is-flex is-align-items-center">
                                <div className="countdown is-flex-grow-1 is-flex-direction-column">
                                    <div>Sale Ends In:</div>
                                    <div className="countdown-text"><strong><span>00</span><span className="dotdot">:</span><span>05</span><span className="dotdot">:</span><span>50</span><span className="dotdot">:</span><span>14</span></strong></div>
                                </div>
                                <div className="view-pool has-text-right">
                                    <a className="view-button" href="/PadInfo">
                                    {/* 0xaCD587c5dB11796682F6B1C9d88Cd08DB3bAEE50?chain=BSC-Test"> */}
                                        <span className="badge rounded-pill bg-warning">View Pool</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <figure className="media-left">
                            <p className="image">
                                <img className="card-img-top" src="https://i.postimg.cc/Vs9zFvQ5/20220404-104138-0000.png" style={{filter: 'grayscale(0)', width: '30%', height: 'auto'}} ></img>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="is-flex is-justify-content-flex-end">
                                <div className="is-flex has-text-right is-flex-direction-column">
                                    <div className="is-flex">
                                        <span className="is-flex status-dot inprogress"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 8 8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"></circle></svg><span> Sale Live</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-title">
                            <p className="title"><span>Madicoin</span></p>
                            <p className="subtitle">1 BNB = 10,000 MDC</p>
                        </div>
                        <div className="soft-hard-cap">
                            <p>Soft/Hard Cap:</p><span>10 BNB - 10 BNB</span>
                        </div>
                        <div className="content-progress">
                            <p>
                                <strong>Progress (70.00%)</strong></p>
                            <div className="progress">
                                <div className="progress-bar" style={{width:'70%'}}>70%</div>
                            </div>
                            <div className="sub-title is-flex is-align-items-center">
                                <div className="is-flex-grow-1">0 BNB</div>
                                <div className="is-flex-grow-1 has-text-right">10 BNB</div>
                            </div>
                        </div>
                        <div className="liquidity-percent">
                            <div className="is-flex is-align-items-center">
                                <p className="is-flex-grow-1">Liquidity %:</p><span className="is-flex-grow-1 has-text-right time-text">52%</span></div>
                        </div>
                        <div className="lockup-time" style={{margin: '0px 0px 1.5rem'}}>
                            <div className="is-flex is-align-items-center">
                                <p className="is-flex-grow-1">Lockup Time:</p><span className="is-flex-grow-1 has-text-right time-text">24 minutes</span></div>
                        </div>
                        <div className="custom-card-footer">
                            <div className="is-flex is-align-items-center">
                                <div className="countdown is-flex-grow-1 is-flex-direction-column">
                                    <div>Sale Ends In:</div>
                                    <div className="countdown-text"><strong><span>00</span><span className="dotdot">:</span><span>05</span><span className="dotdot">:</span><span>50</span><span className="dotdot">:</span><span>14</span></strong></div>
                                </div>
                                <div className="view-pool has-text-right">
                                    <a className="view-button" href="/PadInfo">
                                    {/* 0xaCD587c5dB11796682F6B1C9d88Cd08DB3bAEE50?chain=BSC-Test"> */}
                                        <span className="badge rounded-pill bg-warning">View Pool</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PadList;
