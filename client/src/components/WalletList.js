// src/components/WalletList.js
import React, { useState, useEffect } from 'react';
import { fetchWallets } from '../utils/api';

const WalletList = () => {
  const [wallets, setWallets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getWallets = async () => {
      setIsLoading(true);
      try {
        const fetchedWallets = await fetchWallets();
        setWallets(fetchedWallets);
      } catch (err) {
        console.error('Error fetching wallets:', err);
      } finally {
        setIsLoading(false);
      }
    };

    getWallets();
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Tracked Wallets</span>
        {isLoading ? (
          <p>Loading wallets...</p>
        ) : (
          <ul className="collection">
            {wallets.map((wallet) => (
              <li key={wallet.address} className="collection-item">
                {wallet.address} (Hero Token: {wallet.heroBalance})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WalletList;
