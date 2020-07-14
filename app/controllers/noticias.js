module.exports.noticias = function(app, req, res){
				var connection = app.config.dbConnection();
				var noticiasmodel = new app.app.models.noticiasModel(connection);

				noticiasmodel.getNoticias(function(error,result){
				res.render("noticias/noticias", {noticias : result});
					//res.send(result);
				});

}

module.exports.noticia = function(app, req, res){
				var connection = app.config.dbConnection();
				var noticiamodel = new app.app.models.noticiasModel(connection);
				var id_noticia = req.query;
				noticiamodel.getNoticia(id_noticia, function(error,result){
				res.render("noticias/noticias", {noticias : result});
				});
}