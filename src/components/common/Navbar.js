import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "../layout/styles.css";
import Logo from './img/logo.png';
import MetamaskImg from "./img/metamask.jpg";
import WalletconnectImg from "./img/walletconnect.png";
import { useMoralis } from "react-moralis";

const Navbar = () => {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({signingMessage: "Connect to SaFuTrendzPad" })
        .then(function (user) {
          console.log("logged in user:", user);        
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const login2 = async () => {
    if (!isAuthenticated) {
      await authenticate({signingMessage: "Connect to SaFuTrendzPad",provider:"walletconnect" })
        .then(function (user) {
          console.log("logged in user:", user);        
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }


       
    return ( 
    <>
        <nav className = "navbar navbar-expand-md bg-dark navbar-dark" style={{textAlign: 'left', color: '#fff', backgroundColor: '#fff'}}>
        
            <a href = "/" ><img src = { Logo } className = "photo"  alt = "logo" style={{marginLeft: '-35px'}} /></a>
            
            <img onClick={login} width="40" src={MetamaskImg} alt="m" />
            <img onClick={login2} width="40" src={WalletconnectImg} alt="w" />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/PadList">Launchpad list </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/LaunchPad1">Create launchpad</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/CreateToken">Create token</a>
                </li>    
                </ul>
            </div>  
            
        </nav>
    </>
    );
};

export default Navbar;