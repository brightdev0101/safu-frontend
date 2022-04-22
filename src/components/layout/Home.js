import React from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";

// import '../../assets/css/main_chunk.css';

const Home = () => {
  
  return (    
        <section className="ant-layout black-background">
        <main className="ant-layout-content MainLayout_content__2mZF9">
            <div className="py-6 container">
                
                <div style={{height: '16px'}}></div>

                <div className="bg-dark style-border ant-card ant-card-bordered" style={{marginBottom:'100px'}}>
                    <div className="ant-card-body">
                        <h3 className="lead text-center socials" style={{fontSize: '24px'}}>SaFuTrendzPad the Evolution of SaFu Projects</h3>
                        <p className="lead text-center">
                            <i>SaFuTrendzPad gives you the best secure, fast, and reliable launchpad for your projects which all token needs to pass through a verification service before getting listed on our platform. 

                            We do this to create trust and secure trading for our investors, everyone can trade with no risk.</i>
                        </p>
                        <div className="has-text-centered" ><a href="/LaunchPad1" className="btn btn-success" style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Launch Now</span></a></div>
                        
                    </div>
                </div>
                <h3 className="text-center socials">SaFuTrendzPad Ecosystem</h3>
                <p className="lead text-center" style={{color:'white'}}>
                    <i>Suitable tools to get started with our launchpad, with fast, efficiency, and support towards your project and 100% decentralized.</i>
                </p>
                <div className="">
                <div className=" bg-dark style-border ant-card ant-card-bordered" style={{marginBottom:'30px'}}>
                    <div className="ant-card-body">
                        <h1 className="lead text-center socials" style={{fontSize: '24px'}}>Mint Token</h1>
                        <p className="lead text-center">
                            <i>Mint standard tokens on ETH, BSC, AVAX, Cronos.</i>
                        </p>
                        <div className="has-text-centered" ><Link to="/CreateToken" className="btn gradBtn btn-success" style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Create Now</span></Link></div>
                    </div>
                </div>
                <div className="bg-dark style-border ant-card ant-card-bordered" style={{marginBottom:'30px'}}>
                    <div className="ant-card-body">
                        <h1 className="lead text-center socials" style={{fontSize: '24px'}}>Launchpad</h1>
                        <p className="lead text-center">
                            <i>Use the token you mint to create a launchpad with just a few clicks.</i>
                        </p>
                        <div className="has-text-centered" ><a href="/LaunchPad1" className="btn btn-success" style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Launch Now</span></a></div>
                    </div>
                </div>
                <div className="bg-dark style-border ant-card ant-card-bordered" style={{marginBottom:'100px'}}>
                    <div className="ant-card-body">
                        <h1 className="lead text-center socials" style={{fontSize: '24px'}}>Airdrop</h1>
                        <p className="lead text-center">
                            <i>Distribute Airdrop / Giveaway with a few clicks 

        Supports only BSC Token, More chains coming soon on our Airdrop DAPP</i>
                        </p>
                        <div className="has-text-centered" ><a href="https://multisender.safutrendz.com/" className="btn btn-success" style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)'}}><span>Go Now</span></a></div>
                    </div>
                </div>
                </div>
            </div>
        </main>

        </section>
  );
};

export default Home;
