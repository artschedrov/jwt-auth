require('dotenv').config();
const express =require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const start = async() => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      userNewUrlParser: true,
      userUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`Server start on ${PORT}`));
  } catch(e) {
    console.log(e);
  }
}

start();