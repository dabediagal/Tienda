// Hito 4 · Regla personal y altas/bajas
//
// Mi regla personal (cópiala de tu ficha):
// Descuento por compra: un 5 % a partir de 20 € y un 10 % a partir de 50 €. aplicarDescuento(total) devuelve el total con el descuento, redondeado a 2 decimales.
// Ejemplo: 19,99 € → 19,99 €. 20 € → 19 €. 30 € → 28,50 €. 60 € → 54 €.
// Válido si: Funciona dentro de tu proyecto, en js/regla.js, y tiene al menos 2 pruebas en js/pruebas.js: una del caso normal y otra del límite o del error.
//
// Aquí van también las altas y bajas en memoria. Validan los datos
// y lanzan errores con throw, por ejemplo:
//   throw new Error("Socio no encontrado");

/**
 * Crea un pedido nuevo y devuelve una lista nueva con él al final.
 * No modifica la lista que recibe. Si algo no vale, lanza el error antes de gastar un id.
 * @param {Array[]} listaPedidos  Lista actual de pedidos
 * @param {number} idCliente  Id del cliente que pide
 * @param {number} idProducto  Id del producto pedido
 * @param {number} unidades  Unidades pedidas (1 o más, sin pasar del stock)
 * @param {number} dia  Día del pedido, del 1 al 60
 * @param {function(): number} generarId  Generador de ids (closure de crearGeneradorId)
 * @returns {Array[]} Lista nueva con el pedido añadido
 * @throws {Error} Si el cliente o el producto no existen, o si las unidades, el stock o el día no valen
 * @example crearPedido(pedidos, 6, 1, 2, 10, () => 14) // añade [14, 6, 1, 2, 10, false]
 */
function crearPedido(listaPedidos, idCliente, idProducto, unidades, dia, generarId) {
	if (buscarCliente(idCliente) === undefined) throw new Error("Cliente no encontrado");

	const producto = buscarProducto(idProducto); // Lo guardo como constante para reutilizarlo para ver el stock del producto.

	if (producto === undefined) throw new Error("Producto no encontrado");

	if (!Number.isInteger(unidades) || unidades < 1) throw new Error("Unidades no válidas");

	if (unidades > producto[PR_STOCK]) throw new Error("Stock insuficiente");

	if (!Number.isInteger(dia) || dia < 1 || dia > 60) throw new Error("Día no válido");

	return [...listaPedidos, [generarId(), idCliente, idProducto, unidades, dia, false]];
}

/**
 * Devuelve una lista nueva sin el pedido indicado. No modifica la lista que recibe.
 * @param {Array[]} listaPedidos  Lista actual de pedidos
 * @param {number} idPedido  Id del pedido a borrar
 * @returns {Array[]} Lista nueva sin ese pedido
 * @throws {Error} Si no hay ningún pedido con ese id
 * @example borrarPedido(pedidos, 13).length // 12
 */
function borrarPedido(listaPedidos, idPedido) {
	// Si no hay un pedido con ese id, lanzo el error.
	if (!listaPedidos.some((fila) => fila[PE_ID] === idPedido)) {
		throw new Error("Pedido no encontrado");
	}
	// Se devuelve la lista sin el pedido que quería eliminar.
	return listaPedidos.filter((fila) => fila[PE_ID] !== idPedido);
}

/**
 * Calcula el importe de un pedido (unidades × precio del producto), redondeado a 2 decimales.
 * @param {Array} pedido  Fila de un pedido
 * @returns {number} Importe del pedido sin descuento
 * @example totalPedido([4, 1, 13, 6, 45, false]) // 6 × 0,65 = 3.9
 */
function totalPedido(pedido) {
	const producto = buscarProducto(pedido[PE_PRODUCTO]);
	const total = pedido[PE_UNIDADES] * aNumero(producto[PR_PRECIO]);
	return Math.round(total * 100) / 100;
}

/**
 * Regla personal: aplica un 5 % de descuento a partir de 20 € y un 10 % a partir de 50 €.
 * @param {number} total  Importe de la compra
 * @returns {number} Total con el descuento, redondeado a 2 decimales
 * @throws {Error} Si el total no es un número o es negativo
 * @example aplicarDescuento(19.99) // 19.99
 * @example aplicarDescuento(30) // 28.5
 * @example aplicarDescuento(60) // 54
 */
function aplicarDescuento(total) {
	if (typeof total !== "number" || Number.isNaN(total) || total < 0) {
		throw new Error("Total no válido");
	}

	if (total >= 50) {
		total *= 0.9;
	} else if (total >= 20) {
		total *= 0.95;
	}
	// Round redondea a entero, por eso muevo la coma dos posiciones a la derecha (*100), redondeo, y luego devuelvo la coma dos a la izquierda (/100).
	return Math.round(total * 100) / 100;
}
