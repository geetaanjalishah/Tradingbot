import React, { useState } from 'react';
import WalletList from './components/WalletList';
import WalletDetails from './components/WalletDetails';
import TradeForm from './components/TradeForm';
import Notifications from './components/Notifications';
import './App.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);

  return (
    <div className="container">
      <h1 className="center-align">Trading Strategy Dashboard</h1>
      <div className="row">
        <div className="col s12 m6">
          <WalletList onSelectWallet={setSelectedWallet} />
          {selectedWallet && (
            <>
              <WalletDetails walletAddress={selectedWallet} />
              <Notifications />
            </>
          )}
        </div>
        <div className="col s12 m6">
          <TradeForm />
        </div>
      </div>
    </div>
  );
};

export default App;
