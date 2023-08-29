const express = require('express');
const app = express();
const db = require('./models');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

// Middleware for parsing JSON and x-www-form-urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the professional backend!');
});

// Include routes here
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
