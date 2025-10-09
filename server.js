// backend/server.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import compression from 'compression'
import { setupSwagger } from './utils/swagger.js'
import productosRoutes from './routes/productos.js'
import { errorHandler } from './middleware/errorHandler.js'

dotenv.config()
const app = express()

app.use(compression())
app.use(cors())
app.use(express.json())

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de Helados de Belén 🍦' })
})

app.use('/api/productos', productosRoutes)

// Documentación Swagger
setupSwagger(app)

// Manejo centralizado de errores
app.use(errorHandler)

const PORT = process.env.PORT || 3000

function startServer(port) {
  try {
    const server = app.listen(port, () => {
      console.log(`✅ Servidor activo en http://localhost:${port}`)
      console.log(`📘 Documentación Swagger: http://localhost:${port}/api/docs`)
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.warn(`⚠️ El puerto ${port} está ocupado. Probando con otro...`)
        startServer(port + 1)
      } else {
        console.error('💥 Error al iniciar el servidor:', err)
      }
    })
  } catch (error) {
    console.error('💥 Error general del servidor:', error)
  }
}

startServer(Number(PORT))
