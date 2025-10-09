// backend/middleware/errorHandler.js

// Middleware centralizado para manejo de errores
export function errorHandler(err, req, res, next) {
  console.error('💥 Error detectado:', err.stack)

  res.status(err.status || 500).json({
    mensaje: err.message || 'Error interno del servidor',
    detalle: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  })
}

// backend/server.js
