// backend/utils/swagger.js
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const port = process.env.PORT || 3000
const serverUrl = `http://localhost:${port}`

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Helados de Belén 🍦',
      version: '1.0.0',
      description: 'Documentación automática de la API',
    },
    servers: [{ url: serverUrl }],
  },
  apis: ['./routes/*.js'],
}

export const swaggerSpec = swaggerJsdoc(options)

export function setupSwagger(app) {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
