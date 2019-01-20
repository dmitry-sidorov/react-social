import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
      <div className="app-wrapper">
        <header className="header">
          <img src="https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png" />
        </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"/>
        </div>
        <div>
          <div>my photo</div>
          ava + description
        </div>
        <div>posts
          <div>
            new post
          </div>
        </div>
      </div>
      </div>
    );
  }

export default App;
