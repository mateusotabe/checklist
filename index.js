//requieres
const express = require("express");
const path = require("path"); //para conectar os arquivos no MCV tenho q fazer por aqui 
const routes = require("./routes/routes");//importando as routes

//consts
const app = express();
const port = 3000;

//coisas q o app faz
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public"))); //conectando com a pasta public de arquivos estáticos **** path é a pasta atual e cheklist dirname é a pasta principal aqui eu junto a pasta principal com a pasta public onde ficam as paradas
app.use(routes)//to fazendo uso das routes
//isso é  uma rota sem a conexão do MVC
/**app.get('/', (req, res) => {
    res.render("index");
}); */

app.listen(port, () =>
    console.log(`Servidor Rodando em http://localhost:${port}`)
    );   
    // instalei o ejs
    // instalei o Nodemon pra atualizar o servidor automaticamente ai eu chamo npm run dev, alterei o packege.json para isso. Coloquei "dev": "nodemon index" dentro do scripsts ai ele atauliza sempre q tiver uma alteração