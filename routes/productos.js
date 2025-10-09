// backend/routes/productos.js
import express from 'express'
import {
  obtenerProductos,
  obtenerProductoPorId,
} from '../controllers/productosController.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   - name: Productos
 *     description: Operaciones sobre el catálogo de productos
 */

/**
 * @swagger
 * /api/productos:
 *   get:
 *     tags:
 *       - Productos
 *     summary: Obtiene el menú completo agrupado por categoría
 *     responses:
 *       200:
 *         description: Menú agrupado por categoría
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductsGrouped'
 */
router.get('/', obtenerProductos)

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     tags:
 *       - Productos
 *     summary: Obtiene un producto por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', obtenerProductoPorId)

export default router
