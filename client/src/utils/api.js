import axios from 'axios';

const baseUrl= process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchWallets = async () => {
  try {
    const response = await axios.get(`${baseUrl}/wallets`);
    return response.data;
  } catch (err) {
    console.error('Error fetching wallets:', err);
    throw err; 
  }
};

export const fetchWalletTransactions = async (walletAddress) => {
  try {
    const response = await axios.get(`${baseUrl}/wallets/${walletAddress}/transactions`);
    return response.data;
  } catch (err) {
    console.error('Error fetching transactions:', err);
    throw err; 
  }
};


export const initiateTrade = async (amount, timeout) => {
  try {
    const response = await axios.post(`${baseUrl}/trades`, {
      amount,
      timeout,
    });
    return response.data;
  } catch (err) {
    console.error('Error initiating trade:', err);
    throw err; 
  }
};

