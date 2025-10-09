// backend/controllers/productosController.js
import { readMenuGrouped, getProductById } from '../models/productosModel.js'
import { formatPrice } from '../utils/formatPrice.js'

export async function obtenerProductos(req, res, next) {
  try {
    const grouped = await readMenuGrouped()
    const result = {}
    for (const [categoria, items] of Object.entries(grouped)) {
      result[categoria] = (items || []).map((p) => ({
        ...p,
        precio_formateado: p.precio != null ? formatPrice(p.precio) : '',
      }))
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
}

export async function obtenerProductoPorId(req, res, next) {
  try {
    const id = req.params.id
    const producto = await getProductById(id)
    if (!producto)
      return res.status(404).json({ mensaje: 'Producto no encontrado' })
    res.json({
      ...producto,
      precio_formateado:
        producto.precio != null ? formatPrice(producto.precio) : '',
    })
  } catch (error) {
    next(error)
  }
}
