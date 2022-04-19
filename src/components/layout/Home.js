import React from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";

// import '../../assets/css/main_chunk.css';

const Home = () => {
  
  return (
    <>
    {/* <section className="black-background bg-dark" style={{height: '768px',  marginBottom: '-200px'}}>
        <p style={{fontSize: '24px', paddingTop:'180px', paddingBottom:'40px', paddingRight:'20px',paddingLeft:'20px', textAlign: 'center', color: '#fff'}}>SaFuTrendzPad the Evolution of SaFu Projects</p>
        <span>
          SaFuTrendzPad gives you the best secure, fast, and reliable launchpad for your projects which all token needs to pass through a verification service before getting listed on our platform. 

          We do this to create trust and secure trading for our investors, everyone can trade with no risk.
        </span>
        <button>Launch Now</button>

        <p style={{fontSize: '24px', paddingTop:'26px', textAlign: 'center', color: '#fff'}}>SaFuTrendzPad Ecosystem</p>
        <span>
          Suitable tools to get started with our launchpad, with fast, efficiency, and support towards your project and 100% decentralized.
        </span>
    </section> */}

<section className="ant-layout black-background">
<main className="ant-layout-content MainLayout_content__2mZF9">
    <div className="py-6 container">
        
        <div style={{height: '16px'}}></div>

        <div className="bg-dark style-border ant-card ant-card-bordered" style={{marginBottom:'100px'}}>
            <div className="ant-card-body">
                <h1 className="lead text-center socials" style={{fontSize: '24px'}}>SaFuTrendzPad the Evolution of SaFu Projects</h1>
                <p className="lead text-center">
                    <i>SaFuTrendzPad gives you the best secure, fast, and reliable launchpad for your projects which all token needs to pass through a verification service before getting listed on our platform. 

                    We do this to create trust and secure trading for our investors, everyone can trade with no risk.</i>
                </p>
                <div className="has-text-centered" ><Link to="/1verify" className="btn btn-success"><span>Launch Now</span></Link></div>
                
            </div>
        </div>
        <h3 className="text-center socials">SaFuTrendzPad Ecosystem</h3>
        <p className="lead text-center" style={{color:'white'}}>
            <i>Suitable tools to get started with our launchpad, with fast, efficiency, and support towards your project and 100% decentralized.</i>
        </p>
    </div>
</main>

</section>
</>
  );
};

export default Home;