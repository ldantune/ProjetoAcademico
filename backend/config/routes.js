module.exports = app => {

    // app.route('/filmes')
    //     .get(app.api.filme.get);

    // app.route('/filme/:film_id')
    //     .get(app.api.filme.getById);

    // app.route('/linguagens')
    //     .get(app.api.language.get)
    
    app.route('/disciplina')
        .get(app.api.disciplina.get)
        .post(app.api.disciplina.create);

    app.route('/disciplina/:cod_disc')
        .get(app.api.disciplina.getById)
        .put(app.api.disciplina.update);
}