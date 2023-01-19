const mongoose = require("mongoose");
const { Schema } = mongoose;

const pedidoSchema = new Schema({
  nome: String,
  produto: String,
  quantidade: String,
  observacao: String,
});
var User = mongoose.model("pedido", pedidoSchema)
module.exports = User
