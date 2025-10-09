// backend/utils/importData.js
import db from "../database/db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, "../data/menu_helados.json");
const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

const insert = db.prepare(`
  INSERT INTO productos (categoria, nombre, descripcion, precio)
  VALUES (?, ?, ?, ?)
`);

db.prepare("DELETE FROM productos").run(); // limpiar antes
for (const categoria in jsonData) {
  jsonData[categoria].forEach((item) => {
    insert.run(categoria, item.nombre, item.descripcion, item.precio);
  });
}

console.log("✅ Datos importados correctamente desde JSON.");
