Noticias = function(connection){

	this._connection = connection;

}

Noticias.prototype.getNoticias = function(callback){
		this._connection.query('select * from noticias order by data_criacao desc', callback);
	}

Noticias.prototype.getNoticia = function(id_noticia, callback){
		this._connection.query('select * from noticias where id_noticia='+id_noticia.id_noticia, callback);
	}

Noticias.prototype.postNoticia = function(noticia, callback){
		this._connection.query('insert into noticias set ? ', noticia, callback);
	}

Noticias.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(app){
	return Noticias;
}