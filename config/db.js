const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URL);
    console.log('Database connected');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

module.exports = connectdb;
