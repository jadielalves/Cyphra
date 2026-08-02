const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");

const obj = express();

obj.use(express.json());

obj.get("/", (req, res) => {
    res.send("API conectada");
})

obj.use("/usuarios", usuarioRoutes);

obj.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
})