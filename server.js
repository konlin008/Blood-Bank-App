const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require("mongoose");
const connectDb = require("./config/db");

dotenv.config();

connectDb()

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/test', require('./routes/testRouts'));
app.use('/api/v1/auth', require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Node Server Runnning In ${process.env.DEV_MODE} Port ${process.env.PORT}`
    .bgBlue.white);
}); 
