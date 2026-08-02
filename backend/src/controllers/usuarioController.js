const listarUsuarios = (req, res) => {
    return res.status(200).json({
        mensagem: "Usuários encontrados"
    });
};

module.exports = {
    listarUsuarios
};