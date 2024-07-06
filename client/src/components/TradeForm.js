import React, { useState } from 'react';
import axios from 'axios';

const TradeForm = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState();
  const [action, setAction] = useState('');

  const handleTrade = async (e) => {
    e.preventDefault();
    try {
      const endpoint = action === 'buy' ? '/api/transactions/buy' : '/api/transactions/sell';
      const response = await axios.post(endpoint, { walletAddress, amount });
      console.log(response.data.message);
    } catch (err) {
      console.error('Error during trade:', err.message);
    }
  };

  return (
    <form onSubmit={handleTrade} className="card">
      <div className="card-content">
        <span className="card-title">Trade HeroToken</span>
        <div className="input-field">
          <input type="text" id="walletAddress" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} required />
          <label htmlFor="walletAddress">Wallet Address</label>
        </div>
        <div className="input-field">
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required />
          <label htmlFor="amount">Amount</label>
        </div>
        <div className="input-field">
          <select id="action" value={action} onChange={(e) => setAction(e.target.value)} className="browser-default">
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
          <label htmlFor="action">Action</label>
        </div>
        <button type="submit" className="btn waves-effect waves-light">Submit</button>
      </div>
    </form>
  );
};

export default TradeForm;
