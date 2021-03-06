import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../layout/styles.css";
// import "../layout/side";

import Logo from "./img/logo.png";
import MetamaskImg from "./img/metamask.jpg";
import WalletconnectImg from "./img/walletconnect.png";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import { parse, stringify } from "flatted";

const Navbar = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Connect to SaFuTrendzPad" })
        .then(function (user) {
          Moralis.enableWeb3()
            .then((res) => {
              const provider = res;
              const userAddress = user.attributes.accounts[0];
              const signer = provider.getSigner(userAddress);

              window.localStorage.setItem("signer", stringify(signer));
              window.localStorage.setItem("userAddress", userAddress);
              console.log("logged in: " + userAddress);
            })
            .catch((err) => console.log(err));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const login2 = async () => {
    if (!isAuthenticated) {
      await authenticate({
        signingMessage: "Connect to SaFuTrendzPad",
        provider: "walletconnect",
      })
        .then(function (user) {
          window.localStorage.setItem(
            "walletAccount",
            user.attributes.accounts[0]
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-dark navbar-dark"
        style={{
          textAlign: "left",
          color: "#fff",
          backgroundColor: "#fff",
          display: "flex",
        }}
      >
        <a href="/">
          <img src={Logo} className="photo big-small-screen" alt="logo" />
        </a>
        {!isAuthenticated ? (
          <div className="dropdown" style={{ minWidth: "15rem" }}>
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              style={{
                backgroundImage: "linear-gradient(135deg,#ebd15f,#fa0)",
              }}
            >
              Connect
            </button>
            <div className="dropdown-menu">
              <img
                onClick={login}
                width="50"
                src={MetamaskImg}
                className="rounded-circle"
                style={{ marginRight: "20px", marginLeft: "20px" }}
                alt="m"
              />
              MetaMask
              <img
                onClick={login2}
                width="50"
                src={WalletconnectImg}
                className="rounded-circle"
                style={{ marginRight: "20px", marginLeft: "20px" }}
                alt="w"
              />
              WalletConnect
            </div>
          </div>
        ) : (
          <button
            onClick={logOut}
            width="50"
            className="btn btn-primary"
            style={{
              backgroundImage: "linear-gradient(135deg,#ebd15f,#fa0)",
              marginRight: "20px",
            }}
          >
            disconnect
          </button>
        )}

        <button
          className="navbar-toggler"
          id="toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/PadList">
                Launchpad list{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/LaunchPad1">
                Create launchpad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CreateToken">
                Create token
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
