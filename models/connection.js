const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:fC307pzA2aZY4rHZ@cluster0.srnjetf.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
