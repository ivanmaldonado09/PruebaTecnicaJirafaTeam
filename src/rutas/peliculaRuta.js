import express from 'express';

import {buscarPelicula} from '../controladores/peliculaControlador.js';

const router = express.Router();

router.get('/buscar', buscarPelicula);

export default router;