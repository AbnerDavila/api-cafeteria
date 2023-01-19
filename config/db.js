const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/delivery", { useNewUrlParser: true });
module.exports = mongoose.connection;
