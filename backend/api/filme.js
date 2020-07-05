module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation;


    const get = (req, res) => {
        console.log('Chegou aqui');
        app.db('film')
            .then(film => res.json(film))
            .catch(err => res.status(500).send(err))
    }


    const getById = (req, res) => {
        console.log('filme');
        app.db('film')
            .where({ film_id: req.params.film_id })
            .first()
            .then(film => res.json(film))
            .catch(err => res.status(500).send(err))
    }

    return {  get, getById }
}