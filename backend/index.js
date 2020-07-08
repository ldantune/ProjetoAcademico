// const app = require('express')()
// const consign = require('consign')
// const db = require('./config/db')


// app.db = db

// let router = require('./routers/s3.router.js');
// app.use('/', router);

// consign()
//     .then('./config/middlewares.js')
//     .then('./api/validation.js')
//     .then('./api')
//     .then('./config/routes.js')
//     .into(app)

// app.listen(4000, () => {
//     console.log('Backend executando...')
// })

const express = require('express');
const app = express();
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
 
let router = require('./routers/s3.router.js');
app.use('/', router);
 
// Create a Server
app.listen(4000, () => {
     console.log('Backend executando...')
})