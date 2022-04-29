import React from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";

// import '../../assets/css/main_chunk.css';

const LaunchRes = () => {
    const presaleAddress = window.localStorage.getItem("presaleAddress")
    return (    
        <section className="ant-layout black-background">
        <main className="ant-layout-content MainLayout_content__2mZF9">
            <div className="py-6 container">
                
                <div style={{height: '16px'}}></div>

                <div className="bg-dark style-border ant-card ant-card-bordered" style={{marginBottom:'100px'}}>
                    <div className="ant-card-body">
                        <h3 className="lead text-center socials" style={{fontSize: '24px'}}>Congratulations</h3>
                        <p className="lead text-center" style={{color:'white'}}>
                            <i>You have successfully created a new presale launchpad. The smart contract address of your new launchpad is the following.
                            </i>
                        </p>
                        <p className="lead text-center">
                            <i>{presaleAddress}</i>
                        </p>
                    </div>
                </div>
                {/* <h3 className="text-center socials">SaFuTrendzPad Ecosystem</h3>
                <p className="lead text-center" style={{color:'white'}}>
                    <i>Suitable tools to get started with our launchpad, with fast, efficiency, and support towards your project and 100% decentralized.</i>
                </p> */}
            </div>
        </main>

        </section>
  );
};

export default LaunchRes;
