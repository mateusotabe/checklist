// aqui onde fica as ROTAS separadas dos métodos, programação avançada é com o Joãozonho
const routes = require("express").Router();//o metodo do express é para criar as nossas rotas
const TaskController = require("../controller/TaskController");//importando o método de onde tem que vir 

routes.get("/", TaskController.getAll)//metodo da taskController

//agora aqui é um módulo

module.exports = routes; 