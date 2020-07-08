module.exports = (app) => {
  const { existsOrError, notExistsOrError } = app.api.validation;

  const create = (req, res) => {
    
    let id;
    const disciplina = {
      cod_disc: req.body.cod_disc,
      qtd_cred: req.body.qtd_cred,
      nom_disc: req.body.nom_disc,
      cod_disc_equiv: req.body.cod_disc_equiv,
    };

    if (req.params.cod_disc) disciplina.cod_disc = req.params.cod_disc;

    try {
      existsOrError(disciplina.nom_disc, 'Disciplina não informado');
    } catch (msg) {
      return res.status(400).send(msg);
    }

    app
        .db('disciplinas')
        .insert(disciplina)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
  };

  const update = (req, res) => {
    const disciplina = {
      cod_disc: req.body.cod_disc,
      qtd_cred: req.body.qtd_cred,
      nom_disc: req.body.nom_disc,
      cod_disc_equiv: req.body.cod_disc_equiv,
    };

    if (req.params.cod_disc) disciplina.cod_disc = req.params.cod_disc;

    try {
      existsOrError(disciplina.nom_disc, 'Disciplina não informado');
    } catch (msg) {
      return res.status(400).send(msg);
    }

    app
      .db('disciplinas')
      .update(disciplina)
      .where({ cod_disc: disciplina.cod_disc })
      .then((_) => res.status(204).send())
      .catch((err) => res.status(500).send(err));
  };

  const get = (req, res) => {
    console.log('Chegou aqui');
    app
      .db('disciplinas')
      .then((disciplina) => res.json(disciplina))
      .catch((err) => res.status(500).send(err));
  };

  const getById = (req, res) => {
    console.log('filme');
    app
      .db('disciplinas')
      .where({ cod_disc: req.params.cod_disc })
      .first()
      .then((disciplina) => res.json(disciplina))
      .catch((err) => res.status(500).send(err));
  };

  return { create, update, get, getById };
};
