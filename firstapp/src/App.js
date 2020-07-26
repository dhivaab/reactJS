import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person';
import Customer from './Customer/Customer';
import Cognizant from './Cognizant/cognizant';
import MountComp from './MountComp/MountComp';
import ChangeComp from './ChangeComp/ChangeComp';
import UnMountCompo from './UnMountCompo/UnMountCompo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> am in react app</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div> 
        <Person></Person>
        <Customer/>
        <Customer/>
        <Cognizant brandname="Tesla"></Cognizant>
        <MountComp favcol ="green"></MountComp>      
          <ChangeComp favcol ="Yellow"></ChangeComp>
        <UnMountCompo></UnMountCompo>
      </div>
    <div id="div1"></div>
    <div id="div2"></div>

    </div>
  );
}

export default App;
