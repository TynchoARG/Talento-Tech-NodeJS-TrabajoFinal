import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';

// carga de variables de entorno desde .env
dotenv.config();

// creacion de una instancia de Express
const app = express();
const PORT = process.env.PORT || 3000;

// creacion de Middlewares globales
// |
// |--> Habilitacion de CORS para peticiones cruzadas entre dominios sin bloqueos
app.use(cors());
// |
// |---> Middleware para interpretar lo del "body" en formato JSON
app.use(bodyParser.json());

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('API de Catálogo de productos funcionando correctamente.');
});

// rutas de productos y auth
app.use('/api', productsRouter);
app.use('/auth', authRouter);

// Middleware para el manejo de rutas no definidas (Error 404)
app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message:'Ruta no encontrada (404)'
    });
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});