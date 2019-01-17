import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
      <div className="App">
      <Header />
      <List />
      </div>
    );
  }

  const Header = () => {
    return (
      <div className="Header">
          <a href="#s">Home</a>
          <a href="#s">News</a>
          <a href="#s">Credits</a>
      </div>
    );
  }

  const List = () => {
    return (
      <div className="List">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
      </div>
    );
  }


export default App;
