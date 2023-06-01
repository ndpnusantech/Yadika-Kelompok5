import express from 'express';
import cors from 'cors';
import carsRouter from './routes/cars_prof_route.js';
import fileUpload from "express-fileupload";
// Router Img
import imgAboveRouter from './routes/cars_img_routes/img_above.js'
import imgBesideRouter from './routes/cars_img_routes/img_beside.js'
import imgUnderRouter  from './routes/cars_img_routes/img_under.js'
import imgFrontRouter from './routes/cars_img_routes/img_front.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(carsRouter);
// Img Router
app.use(imgAboveRouter);
app.use(imgBesideRouter);
app.use(imgUnderRouter );
app.use(imgFrontRouter);

app.listen(5000, () => console.log('Server Berjalan'));
