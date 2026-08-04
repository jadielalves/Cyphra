const express = require('express')
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API conectada");
})

app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
})