const Web3 = require('web3');
const web3 = new Web3('your_blockchain_node_url');

const getTransaction = async (transactionHash) => {
  return await web3.eth.getTransaction(transactionHash);
};

module.exports = { getTransaction };
