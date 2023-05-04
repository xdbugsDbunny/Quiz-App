import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import Connection from './Database/Connection.js'
import router from './Routes/routes.js'
import morgan from 'morgan'

const app = express()


dotenv.config()

app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8080
app.use('/',router)

Connection(USERNAME,PASSWORD)

app.listen(PORT)