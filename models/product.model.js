const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  nome: String,
  produto: String,
  quantidade: String,
  observacao: String,
});
var User = mongoose.model("product", productSchema)
module.exports = User
