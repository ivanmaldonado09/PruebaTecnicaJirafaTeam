Configuración servidor

1)Descargar el proyecto  
2) Instalar Node.js  
3) Una vez instalado Node.js abrir la carpeta raíz del proyecto  
4) Abrir una terminal en esta carpeta e instalar los modulos express y axios (npm install express, axios)  
5) Para correr el servidor, en la misma terminal escribir node index.js  
6) El servidor estará funcionando en el puerto 3000 (puede cambiarse en el index.js)  

Listo, al ir al localhost y el puerto elegido, se abrirá automáticamente el index  

Configuración de la base de datos (para los me gusta de las peliculas).
La base de datos decidí hacerla con SQL, en mi caso uso XAMPP para iniciar mi servicio y utilizo phpmyAdmin como mi interfaz grafica.
Por lo tanto deberá tener iniciado SQL, saber su host, user, password y database (esta misma esta en el repositorio de git para que solo tenga que importar el .sql y asi tener ya la base de datos con la tabla)  

1) Abra la terminal en la carpeta raíz del proyecto  
2) Instale la siguiente dependencia= npm install mysql  
3) En el archivo index.js cambie los datos de la base de datos por los suyos  
4) En caso de antes haber iniciado el servidor, reinicielo, ahora deberan mostrarse por consola 2 mensajes, el primero del servidor funcionando en el puerto elegido y el segundo de la conexion correcta a la base de datos  

Una vez configurado e inicializado el proyecto, vaya a su navegador y dirigase a http://localhost:3000/ (o su puerto elegido en lugar de 3000) y ya podra probar el programa.