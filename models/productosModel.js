// backend/models/productosModel.js
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// rutas locales
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ubicación del JSON y la base de datos
const jsonPath = path.join(__dirname, '../data/menu_helados.json')
const dbPath = path.join(__dirname, '../database/helados_belen.db')

/**
 * Abre la base de datos SQLite (si existe, se crea).
 */
async function openDB() {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  })
}

/**
 * 🔹 Lee el menú completo desde JSON (modo de respaldo)
 */
export async function readMenuGrouped() {
  try {
    const data = await fs.readFile(jsonPath, 'utf-8')
    const menu = JSON.parse(data)

    if (typeof menu !== 'object' || Array.isArray(menu)) {
      throw new Error('El formato del menú JSON es inválido')
    }

    return menu
  } catch (err) {
    console.error('Error al leer menu_helados.json:', err.message)
    return {}
  }
}

/**
 * 🔹 Busca un producto por ID
 */
export async function getProductById(id) {
  // Primero intenta buscar en SQLite
  try {
    const db = await openDB()
    const producto = await db.get('SELECT * FROM productos WHERE id = ?', id)
    if (producto) return producto
  } catch (err) {
    console.warn('Advertencia: no se pudo acceder a SQLite, se usará JSON.')
  }

  // Si falla, busca en JSON
  const grouped = await readMenuGrouped()
  for (const categoria of Object.values(grouped)) {
    const encontrado = categoria.find((p) => p.id === Number(id))
    if (encontrado) return encontrado
  }

  return null
}
