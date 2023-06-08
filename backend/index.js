import express from 'express';
import cors from 'cors';
import carsRouter from './routes/cars_prof_route.js';
import fileUpload from "express-fileupload";
import carsImgRoute from './routes/cars_img_route.js'
import testiRoute from './routes/testi_route.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(carsRouter);
app.use(carsImgRoute)
app.use(testiRoute)


app.listen(5000, () => console.log('Server Berjalan'));
