import express from 'express';
import peliculaRuta from './rutas/peliculaRuta.js';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express(); 
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
}
);

app.use(
    express.static(join(__dirname, 'public'))
);

app.use(express.json());

app.use('/peliculas', peliculaRuta);


export default app;