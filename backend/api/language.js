module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation;


    const get = (req, res) => {
        console.log('Chegou aqui');
        app.db('language')
            .then(language => res.json(language))
            .catch(err => res.status(500).send(err))
    }


    const getById = (req, res) => {
        console.log('filme');
        app.db('language')
            .where({ language_id: req.params.language_id })
            .first()
            .then(language => res.json(language))
            .catch(err => res.status(500).send(err))
    }

    return {  get, getById }
}