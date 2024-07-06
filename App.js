const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const walletRoutes = require('./routes/walletRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const { MONGOURI } = require('./config/keys');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log("connected to mongo"));
mongoose.connection.on('error', err => console.log("err connecting", err));

app.use(cors());
app.use(express.json());

app.use('/api/wallets', walletRoutes);
app.use('/api/transactions', transactionRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(5000, () => console.log("server is running on port 5000"));
