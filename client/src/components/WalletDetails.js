import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WalletDetails = ({ walletAddress }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/wallets/${walletAddress}/transactions`);
        setTransactions(response.data);
      } catch (err) {
        console.error('Error fetching transactions:', err);
      }
    };

    if (walletAddress) {
      fetchTransactions();
    }
  }, [walletAddress]);

  return (
    <div>
      <h2>Wallet Details: {walletAddress}</h2>
      {transactions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Token</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction._id}>
                <td>{new Date(transaction.timestamp).toLocaleString()}</td>
                <td>{transaction.token}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found for this wallet.</p>
      )}
    </div>
  );
};

export default WalletDetails;
