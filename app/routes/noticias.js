//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

			app.get('/noticias', function(req,res){
				app.app.controllers.noticias.noticias(app, req, res);
			});

			app.get('/noticia', function(req,res){
				app.app.controllers.noticias.noticia(app, req, res);
			});
};

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '4pskdmb8';