// backend/database/db.js
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta absoluta al archivo .db
const dbPath = path.join(__dirname, "helados_belen.db");
const db = new Database(dbPath);

// Crear tabla de productos si no existe
db.prepare(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT,
    nombre TEXT,
    descripcion TEXT,
    precio REAL
  )
`).run();

console.log("📦 Base de datos lista:", dbPath);

export default db;
