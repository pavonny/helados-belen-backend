// backend/utils/validateJSON.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Obtener ruta del archivo actual
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Ruta del JSON a validar
const jsonPath = path.join(__dirname, '../data/menu_helados.json')

// Función para validar sintaxis de JSON
function validateJSON(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')

    if (!data.trim()) {
      console.log('⚠️  El archivo está vacío.')
      return
    }

    JSON.parse(data)
    console.log('✅ JSON válido: no se encontraron errores de formato.')
  } catch (error) {
    console.error('❌ Error en el JSON:')
    console.error(error.message)
  }
}

// Ejecutar validación
validateJSON(jsonPath)
