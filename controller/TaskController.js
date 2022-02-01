// isso né um módulo dentro deste projeto
const getAll = (req, res) => {
    return res.render("index");//chama o arquivo index para ir no site
};

//separando o metodo da rota aqui só fica os MÉTODOS
module.exports = {
    getAll,
};