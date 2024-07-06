import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>
            <p>Wallet Address: {transaction.walletAddress}</p>
            <p>Token: {transaction.token}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Timestamp: {new Date(transaction.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
