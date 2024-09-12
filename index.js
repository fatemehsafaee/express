

const express = require('express');
const cors = require('cors')
require('dotenv').config()      //search it 
const logger = require('./middlewares/logger')
const {
    getAllData,
    getByID
} = require('./controllers/data.controllers')
const router = require('./routers/data.route');

const app = express();

app.use(
    logger,
    // express.json(),
    express.urlencoded({extended: true}),
    cors()
)


app.use('/data', router)



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})