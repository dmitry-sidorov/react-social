import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import List from'./List.js';

const App = () => {
    return (
      <div className="App">
      <Header />
      <List />
      </div>
    );
  }

export default App;
