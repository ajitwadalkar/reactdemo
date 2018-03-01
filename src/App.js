import React, { Component } from 'react';
import logo from './moneymanager.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <br/><br/><br/><br/><br/><br/>
            <div id="loginbox"   >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-header-span"> MoneyManager </span>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="loginboxdata">
                    <b className="loginboxdata-u">User Name :</b>
                    <br />
                    <input type="text" id="unm" onfocus="this.removeAttribute('readonly');" readonly /><br />
                    <b className="loginboxdata-p">Password :</b>
                    <br />
                    <input type="password"    id="pwd" onfocus="this.removeAttribute('readonly');" readonly/><br />
                    <br />
                    <input id="Submit1" type="submit"    onserverclick="submit_click" className="mybuttonstyle" value="Sign in" /><br /><br /><br />
                    New User? <a href="#">Sign Up!!!</a> Here


                </div>
            </div>

      </div>
    );
  }
}

export default App;
