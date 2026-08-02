const express = require("express");

const { listarUsuarios } = require("../controllers/usuarioController");

const roteador = express.Router();

roteador.get("/", (req, res) => {
    res.send("Routes conectada");
});

module.exports = roteador;