import express from 'express';

import {buscarPelicula} from '../controladores/peliculaControlador.js';
import { obtenerMGPeliculas } from '../controladores/peliculaControlador.js';
import { agregarMeGusta } from '../controladores/peliculaControlador.js';
import { quitarMeGusta } from '../controladores/peliculaControlador.js';

const router = express.Router();

router.get('/buscar', buscarPelicula);
router.get('/meGusta', obtenerMGPeliculas);
router.post('/meGusta', agregarMeGusta);
router.delete('/meGusta/:id_pelicula', quitarMeGusta);

export default router;