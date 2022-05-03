import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import {Provider} from "react-redux";
import store from "./store.js";

import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/layout/Home';
import PadList from './components/layout/PadList';
import PadInfo from './components/layout/PadInfo';
import CreateToken from './components/layout/CreateToken';
import LaunchPad1 from './components/layout/LaunchPad-1';
import LaunchPad2 from './components/layout/LaunchPad-2';
import LaunchPad3 from './components/layout/LaunchPad-3';
import LaunchPad4 from './components/layout/LaunchPad-4';
import TokenRes from './components/layout/TokenRes';
import LaunchRes from './components/layout/LaunchRes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/layout/Sidebar';

class App extends Component {

  render()
  {
    return (   
      <MoralisProvider serverUrl="https://rz5hutq1rlrl.usemoralis.com:2053/server" appId="mGHnSx9cVgnPD7LnRnCPZ7UCMhJoYilNGNIKDtO0">
        <Provider store={store}>
          <Router forceRefresh={true}>
            <div className="App">
                <Navbar />
                <Sidebar />
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/PadList" component={PadList}/>
                  <Route exact path="/PadInfo" component={PadInfo}/>
                  <Route exact path="/CreateToken" component={CreateToken}/>
                  <Route path="/LaunchPad1" component={LaunchPad1}/>
                  <Route path="/LaunchPad2" component={LaunchPad2}/>
                  <Route exact path="/LaunchPad3" component={LaunchPad3}/>
                  <Route exact path="/LaunchPad4" component={LaunchPad4}/>
                  <Route exact path="/TokenRes" component={TokenRes}/>
                  <Route exact path="/LaunchRes" component={LaunchRes}/>
                  <Route exact path="/Sidebar" component={Sidebar}/>

                </Switch>
                <Footer />
            </div>
          </Router>
        </Provider>
      </MoralisProvider>
      
    );
  }
}

export default App;
