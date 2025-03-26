import mysql from 'mysql';

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'peliculas',
    user: 'root',
    password: ''
});

conexion.connect((error) => {
    if (error) {
        console.error('Error al conectar con la base de datos:', error);
        return;
    }
    console.log('Conexión correcta con la base de datos');
});

export default conexion;
