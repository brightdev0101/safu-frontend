import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "../layout/styles.css";
import Logo from './img/logo.png';

import Web3Modal from "web3modal";
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import {providerOptions} from '../../utils/walletProvider';

const Navbar = () => {

    const [provider, setProvider] = useState();
    const [library, setLibrary] = useState();
    const [account, setAccount] = useState();
    const [network, setNetwork] = useState();
    const [error, setError] = useState("");
    const [chainId, setChainId] = useState();
  
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions 
    });
  
    const connectWallet = async () => {
        try {
          const provider = await web3Modal.connect();
          const library = new ethers.providers.Web3Provider(provider);
          const accounts = await library.listAccounts();
          const network = await library.getNetwork();
          setProvider(provider);
          setLibrary(library);
          if (accounts) setAccount(accounts[0]);
          setNetwork(network);
          setChainId(network.chainId);
        } catch (error) {
          setError(error);
        }
    };
  
    const refreshState = () => {
        setAccount("");
        setChainId();
        setNetwork();
        setProvider();
        setLibrary();
    };
  
    const disconnect = async () => {
        await web3Modal.clearCachedProvider();
        refreshState();
    };
  
    useEffect(() => {
      if (web3Modal.cachedProvider) {
        connectWallet();
      }
    },[]);
  
    useEffect(() => {
      if (provider?.on) {
        const handleAccountsChanged = (accounts) => {
          console.log("accountsChanged", accounts);
          if (accounts) setAccount(accounts[0]);
        };
  
        const handleChainChanged = (_hexChainId) => {
          setChainId(_hexChainId);
        };
  
        const handleDisconnect = () => {
          console.log("disconnect", error);
          disconnect();
        };
  
        provider.on("accountsChanged", handleAccountsChanged);
        provider.on("chainChanged", handleChainChanged);
        provider.on("disconnect", handleDisconnect);
  
        return () => {
          if (provider.removeListener) {
            provider.removeListener("accountsChanged", handleAccountsChanged);
            provider.removeListener("chainChanged", handleChainChanged);
            provider.removeListener("disconnect", handleDisconnect);
          }
        };
      }
    }, [provider]);
    
    return ( 
    <>
        <nav className = "navbar navbar-expand-md bg-dark navbar-dark" style={{textAlign: 'left', color: '#fff', backgroundColor: '#fff'}}>
        
            <a href = "/" ><img src = { Logo } className = "photo"  alt = "logo" style={{marginLeft: '-35px'}} /></a>
            <button onClick={!account ? connectWallet : disconnect} className="btn btn-success" style={{backgroundImage: 'linear-gradient(135deg,#ebd15f,#fa0)', marginLeft:'20px'}}>
              <span>{!account ? "Connect" : "Disconnect"}</span></button>

            {/* <p>Wallet Address: {account}</p> */}
            
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