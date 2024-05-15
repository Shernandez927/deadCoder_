const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/deadcoderdb',
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }
)
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

module.exports = mongoose.connection;