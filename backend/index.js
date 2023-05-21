import express from 'express'
import cors from "cors"
import carsRouter from './routes/carsRoute.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(carsRouter)

app.listen(5000, ()=> console.log('Server Berjalan'))