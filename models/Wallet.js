const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true
  },
  heroBalance: {
    type: Number,
    default: 0
  }
});

const Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;
