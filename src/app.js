const express = require('express');
// Importar el framework Express para crear el servidor

const cors = require('cors');
// Importar CORS para permitir solicitudes desde otros dominios (muy útil cuando el frontend y backend están separados)

const app = express();
// Crear una instancia de aplicación Express

const imagenesRoutes = require('./routes/imagenes.routes');
// Importar las rutas para el manejo de imágenes desde el archivo correspondiente

// Middlewares
app.use(cors());
// Habilita los CORS (permite que el servidor reciba peticiones desde otros orígenes)

app.use(express.json({ limit: '50mb' }));
// Permite recibir datos en formato JSON, estableciendo un límite de 50MB (ideal para datos grandes como imágenes en base64)

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// Permite recibir datos codificados desde formularios (como los enviados por POST desde HTML), también con límite de 50MB

// Rutas
app.use('/api/imagenes', imagenesRoutes);
// Asocia todas las rutas de imágenes bajo el prefijo /api/imagenes

app.use('/api/personas', require('./routes/personas.routes'));
// Asocia todas las rutas de personas bajo el prefijo /api/personas

app.use('/api/usuarios', require('./routes/usuarios.routes'));
// Asocia todas las rutas de personas bajo el prefijo /api/personas

module.exports = app;
// Exportar la app configurada para ser utilizada por el archivo principal del servidor (en este caso, el archivo server.js)
