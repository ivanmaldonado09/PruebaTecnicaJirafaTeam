import express from 'express';
import peliculaRuta from './rutas/peliculaRuta.js';
const app = express(); 

app.use(express.json());


app.use('/peliculas', peliculaRuta);


export default app;