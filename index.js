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

/*
// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('API de Catálogo de productos funcionando correctamente.');
});
*/

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Catálogo de Productos</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background-color: #1e293b;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          max-width: 480px;
          text-align: center;
          border: 1px solid #334155;
        }
        .badge {
          background-color: #10b981;
          color: #064e3b;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 1rem;
        }
        h1 { margin: 0 0 0.5rem; font-size: 1.6rem; }
        p { color: #94a3b8; line-height: 1.5; margin-bottom: 1.5rem; }
        a {
          display: inline-block;
          background-color: #3b82f6;
          color: white;
          text-decoration: none;
          padding: 0.7rem 1.4rem;
          border-radius: 8px;
          font-weight: 500;
        }
        a:hover { background-color: #2563eb; }
      </style>
    </head>
    <body>
      <div class="card">
        <span class="badge">● Servidor Online</span>
        <h1>API de Catálogo de Productos</h1>
        <p>Backend en Node.js + Express conectado a Cloud Firestore y protegido con JWT.</p>
        <a href="/api/products">Ver productos (JSON)</a>
      </div>
    </body>
    </html>
  `);
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