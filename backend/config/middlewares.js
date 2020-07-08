const bodyParser = require('body-parser')
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors(corsOptions))
}