# Helados Belén - Backend

Este proyecto es el backend para la carta digital de Helados Belén. Permite consultar productos y precios desde cualquier dispositivo y red.

## Características

- API REST con Express.js
- Acceso público y multiplataforma
- Manejo automático de puertos ocupados
- Compresión HTTP para respuestas rápidas
- Validación y manejo de errores centralizado
- Formateo de precios en moneda colombiana

## Instalación

1. Clona el repositorio o copia los archivos en tu servidor.
2. Instala las dependencias:
   ```
   npm install
   ```
3. Configura el archivo `.env` (puerto, entorno, etc).
4. Agrega tus productos en `backend/data/menu_helados.json`.

## Uso

1. Inicia el servidor:
   ```
   node server.js
   ```
2. Accede a la API en:
   - `http://localhost:3000` (o el puerto que se muestre en la terminal)
   - Endpoint de prueba: `/api/saludo`
   - Productos: `/api/productos` y `/api/productos/:id`

## Estructura de carpetas

- `controllers/` - Lógica de negocio y controladores
- `data/` - Archivo JSON con los productos
- `middleware/` - Manejo de errores y otros middlewares
- `models/` - Acceso y validación de datos
- `routes/` - Endpoints de la API
- `utils/` - Funciones auxiliares

## Seguridad y buenas prácticas

- CORS abierto para acceso público
- Manejo automático de puertos ocupados
- Validación de datos y errores
- Listo para escalar a base de datos si el proyecto crece

## Recomendaciones

- Agrega autenticación si necesitas funciones administrativas
- Realiza backups periódicos del archivo de productos
- Documenta los endpoints si agregas nuevas rutas

## Autor

Desarrollado por Alexander Pavonny.
