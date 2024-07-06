const Wallet = require('./models/wallet'); // Ensure the correct model is imported

const getWallets = async (req, res) => {
  try {
    const wallets = await Wallet.find();
    res.json(wallets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createWallet = async (req, res) => {
  const wallet = new Wallet({
    address: req.body.address
  });

  try {
    const newWallet = await wallet.save();
    res.status(201).json(newWallet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getWallets, createWallet };
