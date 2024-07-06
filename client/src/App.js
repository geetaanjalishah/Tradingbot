import React from 'react';
import WalletList from './components/WalletList';
import TradeForm from './components/TradeForm';
import Notifications from './components/Notifications';
import './App.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  return (
    <div className="container">
      <h1 className="center-align">Trading Strategy Dashboard</h1>
      <div className="row">
        <div className="col s12 m6">
          <WalletList />
        </div>
        <div className="col s12 m6">
          <TradeForm />
        </div>
      </div>
      <Notifications />
    </div>
  );
};

export default App;
