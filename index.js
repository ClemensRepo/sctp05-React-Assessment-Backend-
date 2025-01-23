const express = require('express');
const cors = require('cors');
require('dotenv').config();


// make sure this comes AFTER dotenv config
const productsRouter = require('./routes/products');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our e-commerce API' });
});


app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});