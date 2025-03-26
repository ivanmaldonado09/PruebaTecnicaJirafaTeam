import conexion from "../../db.js";

export const obtenerMeGustaPeliculas = (callback) => {
    conexion.query('SELECT id_pelicula FROM megusta', (error, resultados) => {
        if (error) {
            console.error('Error al obtener películas:', error);
            callback(error, null); // Devuelve el error al callback
        } else {
            callback(null, resultados); // Devuelve los resultados
        }
    });
};

export const agregarMeGustaPelicula = (id_pelicula, callback) => {
    conexion.query('INSERT INTO megusta (id_pelicula) VALUES (?)', [id_pelicula], (error) => {
        if (error) {
            console.error('Error al agregar película:', error);
            callback(error);
        } else {
            callback(null);
        }
    });
};
