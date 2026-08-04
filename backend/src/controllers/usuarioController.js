const listarUsuarios = (req, res) => {
    return res.status(200).json({
        mensagem: "Usuários encontrados"
    });
};

const cadastrarUsuario = (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({
                mensagem: "Deu erro aí ói"
            })
        }

        return res.status(200).json({
            mensagem: "Dados validados com sucesso"
        })

    } catch (erro) {
        console.log("Erro:", erro);

        return res.status(500).json({
            mensagem: "Deu erro"
        });
    }
};

module.exports = {
    listarUsuarios,cadastrarUsuario
};