'use strict'

let express = require('express');
let server = express();

let titulo = "Jose y sus amigos"

let persona = {
	nombres: "Jose Alfred",
	apellidos: "Suarez Principe",
	edad: "22"
}

let amigos = [
	{
		nombres: "Angy Pamela",
		apellidos: "Quispe Ramirez",
		edad: "21"
	},
	{
		nombres: "Freddy",
		apellidos: "Portales Armas",
		edad: "22"
	}
]

let swig = require('swig');

server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views',__dirname + '/views');
swig.setDefaults({cache: false});

server.use(express.static(__dirname + '/public'));

server.get('/',function(req, res){
    res.render('index.html', {titulo:titulo, persona : persona, amigos : amigos})
});

server.listen(8000,function(){
    console.log("El servidor esta escuchando el puerto " + 8000);
})