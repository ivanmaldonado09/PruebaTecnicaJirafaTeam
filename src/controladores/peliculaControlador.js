import axios from 'axios';
import { obtenerMeGustaPeliculas } from '../modelos/peliculaModelo.js';
import { agregarMeGustaPelicula } from '../modelos/peliculaModelo.js';
import { quitarMeGustaPelicula } from '../modelos/peliculaModelo.js';

const api_key= '717322b7';

const api_url = 'http://www.omdbapi.com/';

export const buscarPelicula = async (req, res) => {
    try {
        const {titulo} = req.query;
        const response = await axios.get(`${api_url}?apikey=${api_key}&s=${titulo}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
} 

export const obtenerMGPeliculas = (req, res) => {
    obtenerMeGustaPeliculas((error, peliculas)=> {
        if (error) {
            res.status(500).json({error: error.message});
            return;
        }
        res.json(peliculas);
    }
    );
}

export const agregarMeGusta = (req, res) => {
    const {id_pelicula} = req.body;
    agregarMeGustaPelicula(id_pelicula, (error) => {
        if (error) {
            res.status(500).json({error: error.message});
            return;
        }
        res.json({mensaje: 'Me gusta agregado'});
    }
    );
}

export const quitarMeGusta = (req, res) =>{
    const {id_pelicula} = req.params;
    quitarMeGustaPelicula(id_pelicula, (error) => {
        if (error) {
            res.status(500).json({error: error.message});
            return;
        }
        res.json({mensaje: 'Me gusta quitado'});
    }
    );

}