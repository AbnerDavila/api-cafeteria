const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./config/db");

app.use(cors());

db.on("connected", function () {
    console.log("connected!");
});

db.on("disconnected", function () {
    console.log("disconnected!");
});

db.on("error", function (error) {
    console.log('Connection error: ' + error);
});

app.use(express.json());

require("./config/routes")(app);

app.listen(3000, (req, res) => {
    console.log("Servidor rodando na porta 3000");
});
