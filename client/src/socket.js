import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000');

const App = () => {
  const [wallets, setWallets] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch wallets
    const fetchWallets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/wallets');
        setWallets(response.data);
      } catch (error) {
        console.error('Error fetching wallets:', error);
      }
    };

    fetchWallets();

    // Listen for new transactions
    socket.on('transactionNotification', (newTransaction) => {
      setNotifications((prevNotifications) => [...prevNotifications, newTransaction]);
    });

    return () => {
      socket.off('transactionNotification');
    };
  }, []);

  return (
    <div>
      <h1>Wallets</h1>
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.address}>{wallet.address}</li>
        ))}
      </ul>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{`Wallet ${notification.walletAddress} had a transaction of ${notification.amount} ${notification.token}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
