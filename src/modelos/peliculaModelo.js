import conexion from "../../db.js";

export const obtenerMeGustaPeliculas = (callback) => {
    conexion.query('SELECT id_pelicula FROM megusta', (error, resultados) => {
        if (error) {
            console.error('Error al obtener películas:', error);
            callback(error, null); 
        } else {
            callback(null, resultados);
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

export const quitarMeGustaPelicula = (id_pelicula, callback) => {
    conexion.query('DELETE FROM megusta WHERE id_pelicula = ?', [id_pelicula], (error) => {
        if (error) {
            console.error('Error al quitar película:', error);
            callback(error);
        } else {
            callback(null);
        }
    });
}
