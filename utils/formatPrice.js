// backend/utils/formatPrice.js

/**
 * Formatea un valor numérico como precio en formato colombiano.
 * @param {number|string} valor - Valor a formatear
 * @param {string} [currencySymbol='$'] - Símbolo de moneda (opcional)
 * @param {string} [locale='es-CO'] - Locale para formato (opcional)
 * @returns {string} Precio formateado o 'N/A' si no es válido
 */
export function formatPrice(valor, currencySymbol = '$', locale = 'es-CO') {
  const num = Number(valor)
  if (isNaN(num)) return 'N/A'
  return `${currencySymbol}${num.toLocaleString(locale)}`
}
