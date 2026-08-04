const express = require("express");

const { listarUsuarios,cadastrarUsuario } = require("../controllers/usuarioController");

const router = express.Router();

router.get("/", listarUsuarios);

router.post("/",cadastrarUsuario);

module.exports = router;