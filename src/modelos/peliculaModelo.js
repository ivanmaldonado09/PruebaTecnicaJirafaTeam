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
