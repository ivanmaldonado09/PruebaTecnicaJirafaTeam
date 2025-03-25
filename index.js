import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hola Mundo");
    }
);

app.listen(3000, () => {
    console.log('servidor funcionado en el puerto 3000');
    });