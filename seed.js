const mongoose = require('mongoose');
const Wallet = require('./models/Wallet');
const Transaction = require('./models/Transaction');
const { MONGOURI } = require('./config/keys');

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const seedData = async () => {
  try {
    // Clear existing data
    await Wallet.deleteMany({});
    await Transaction.deleteMany({});

    // Sample data
    const wallets = [
      { address: '0xWallet1', tokens: ['HeroToken'], lastTransaction: new Date() },
      { address: '0xWallet2', tokens: ['HeroToken'], lastTransaction: new Date() },
      { address: '0xWallet3', tokens: ['HeroToken'], lastTransaction: new Date() },
      { address: '0xWallet4', tokens: ['HeroToken'], lastTransaction: new Date() },
    ];

    const transactions = [
      { walletAddress: '0xWallet1', token: 'HeroToken', amount: 100, timestamp: new Date() },
      { walletAddress: '0xWallet2', token: 'HeroToken', amount: 200, timestamp: new Date() },
      { walletAddress: '0xWallet3', token: 'HeroToken', amount: 300, timestamp: new Date() },
      { walletAddress: '0xWallet4', token: 'HeroToken', amount: 400, timestamp: new Date() },
      { walletAddress: '0xWallet1', token: 'HeroToken', amount: 150, timestamp: new Date() },
      { walletAddress: '0xWallet2', token: 'HeroToken', amount: 250, timestamp: new Date() },
      { walletAddress: '0xWallet3', token: 'HeroToken', amount: 350, timestamp: new Date() },
      { walletAddress: '0xWallet4', token: 'HeroToken', amount: 450, timestamp: new Date() },
    ];

    // Insert sample data
    const insertedWallets = await Wallet.insertMany(wallets);
    console.log('Inserted wallets:', insertedWallets);

    const insertedTransactions = await Transaction.insertMany(transactions);
    console.log('Inserted transactions:', insertedTransactions);

    console.log('Database seeded');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

seedData();
