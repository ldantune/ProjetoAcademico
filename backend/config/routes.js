module.exports = app => {

    app.route('/filmes')
        .get(app.api.filme.get);

    app.route('/filme/:film_id')
        .get(app.api.filme.getById);

    app.route('/linguagens')
        .get(app.api.language.get)
}