module.exports.home = function(app, req, res){
	var connection = app.config.dbConnection();
	var noticiasmodel = new app.app.models.noticiasModel(connection);

	noticiasmodel.get5UltimasNoticias(function(error, result){
		res.render("home/index", {noticias: result});
	});

	
}