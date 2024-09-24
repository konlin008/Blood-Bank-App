const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected TO Mongodb Databas ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Database Error${error}`.bgRed.white);
  }
};
module.exports = connectDb;
