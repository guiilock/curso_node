module.exports.formulario = function(app, req, res){
	res.render("admin/form_add_noticia", {validacao:{}, noticia:{}});
}

module.exports.noticias_salvar = function(app, req, res){

	var connection = app.config.dbConnection();
			var noticiamodel = new app.app.models.noticiasModel(connection);
			var noticia =  req.body;
			req.assert('titulo', 'Título é Obrigatório').notEmpty();
			req.assert('resumo', 'Resumo é Obrigatório').notEmpty();
			req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
			req.assert('autor', 'Autor é Obrigatório').notEmpty();
			req.assert('data_noticia', 'Data é Obrigatória').notEmpty();
			req.assert('data_noticia', 'Data deve estar em um padrão aceitável').isDate({format: 'YYYY-MM-DD'});

			var erros = req.validationErrors();
			if(erros){
				res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
				return;
			}

			noticiamodel.postNoticia(noticia, function(error,result){
				res.redirect('/noticias');
				});

}