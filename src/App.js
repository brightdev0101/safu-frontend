import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

import Web3Modal from "web3modal";
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import {providerOptions} from './utils/walletProvider';

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Landing from "./components/layout/Landing";
// import Dashboard from "./components/layout/Dashboard";
import CreateToken from "./components/layout/CreateToken";
import Verify from "./components/layout/Verify";
import Launchpad from "./components/layout/Launchpad";
import AddInfo from "./components/layout/AddInfo";
import Finish from "./components/layout/Finish";
import LaunchpadInfo from "./components/layout/LaunchpadInfo";

function App() {

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
      setAccount();
      setChainId();
      setNetwork("");
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

  //   // Check for token
  // if (localStorage.jwtToken) {
  //   // Set auth token header auth
  //   setAuthToken(localStorage.jwtToken);
  //   // Decode token and get user info and exp
  //   const decoded = jwt_decode(localStorage.jwtToken);
  //   // Set user and isAuthenticated
  //   store.dispatch(setCurrentUser(decoded));

  //   // Check for expired token
  //   const currentTime = Date.now() / 1000;
  //   if (decoded.exp < currentTime) {
  //     // Logout user
  //     store.dispatch(logoutUser());
  //     // Clear current Profile
  //     store.dispatch(clearCurrentProfile());
  //     // Redirect to login
  //     window.location.href = "/login";
  //   }
  // }

  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/1verify" component={Verify} />
          <Route exact path="/1verify" component={Verify} />
          <Route exact path="/2launchpad" component={Launchpad} />
          <Route exact path="/3addInfo" component={AddInfo} />
          <Route exact path="/4finish" component={Finish} />
          <Route exact path="/createToken" component={CreateToken} />
          <Route exact path="/launchpadInfo" component={LaunchpadInfo} />
        </div>
        <Footer />
          
          {!account ? (
              <button onClick={connectWallet}>Connect Wallet</button>
            ) : (
              <button onClick={disconnect}>Disconnect</button>
            )} 
          <div>Connection Status: {account ? "Connected" : "Disconnected"}</div>
          <div>Wallet Address: {account}</div>
          <div>{`Network ID: ${chainId ? chainId : "No Network"}`}</div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
