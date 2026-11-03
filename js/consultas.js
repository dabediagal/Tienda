// Hito 2 · Consultas
//
// Al menos 6 funciones:
//   - filtrar por un criterio
//   - buscar por id
//   - ordenar por dos criterios
//   - comprobar una condición (some o every)
//   - totalizar con reduce
//   - obtener una lista sin repetidos
// Ninguna modifica las listas originales.
// Para leer un dato de una fila, usa tus constantes: libro[L_TITULO], no libro[1].

/**
 * Convierte un texto con un importe (admite coma decimal) en un número.
 * @param {string|number} texto  Importe a convertir, por ejemplo "2,50"
 * @returns {number} El importe como número
 * @throws {Error} Si el texto está vacío o no es un número válido
 */
function aNumero(texto) {
	const limpio = String(texto).trim().replace(',', '.');

	const numero = Number(limpio);

	if (limpio === '' || Number.isNaN(numero)) {
		throw new Error('Importe no válido');
	}

	return numero;
}

// Buscar por ID:
/**
 * Busca un producto por su id.
 * @param {number} id  Id del producto buscado
 * @returns {Array|undefined} La fila del producto, o undefined si no existe
 */
function buscarPorIdProducto(id) {
	return productos.find((fila) => fila[PR_ID] === id);
}

/**
 * Busca un cliente por su id.
 * @param {number} id  Id del cliente buscado
 * @returns {Array|undefined} La fila del cliente, o undefined si no existe
 */
function buscarPorIdCliente(id) {
	return clientes.find((fila) => fila[CL_ID] === id);
}

/**
 * Busca un pedido por su id.
 * @param {number} id  Id del pedido buscado
 * @returns {Array|undefined} La fila del pedido, o undefined si no existe
 */
function buscarPorIdPedido(id) {
	return pedidos.find((fila) => fila[PE_ID] === id);
}

// Filtrar por un criterio:
/**
 * Devuelve los productos de una categoría.
 * @param {string} categoria  Categoría buscada, por ejemplo "lácteos"
 * @returns {Array[]} Productos de esa categoría (lista vacía si no hay ninguno)
 */
function buscarPorCategoria(categoria) {
	return productos.filter((p) => p[PR_CATEGORIA] === categoria);
}

/**
 * Devuelve los productos de una marca.
 * @param {string} marca  Marca buscada
 * @returns {Array[]} Productos de esa marca (lista vacía si no hay ninguno)
 */
function buscarPorMarca(marca) {
	return productos.filter((p) => p[PR_MARCA] === marca);
}

/**
 * Devuelve los pedidos según su estado de entrega.
 * @param {boolean} entregado  true para los entregados, false para los pendientes
 * @returns {Array[]} Pedidos con ese estado (lista vacía si no hay ninguno)
 */
function buscarPedidosEntregados(entregado) {
	return pedidos.filter((p) => p[PE_ENTREGADO] === entregado);
}
// Ordenar por dos criterios: sort modifica el array, así que copia antes la lista con [...lista]. Para el segundo criterio, usa ||: si el primero empata (da 0), se usa el segundo:

/**
 * Devuelve una copia de los productos ordenada por categoría y,
 * dentro de cada categoría, por nombre. No modifica la lista original.
 * @returns {Array[]} Productos ordenados
 */
function productosOrdenados() {
	return [...productos].sort(
		(a, b) =>
			a[PR_CATEGORIA].localeCompare(b[PR_CATEGORIA]) ||
			a[PR_NOMBRE].localeCompare(b[PR_NOMBRE])
	);
}

// Comprobar una condición: some o every.
/**
 * Comprueba si algún producto tiene el stock a 0.
 * @returns {boolean} true si hay al menos un producto agotado
 */
function hayProductosAgotados() {
	return productos.some((p) => p[PR_STOCK] === 0);
}

/**
 * Comprueba si todos los pedidos están entregados.
 * @returns {boolean} true si todos los pedidos están entregados
 */
function todosEntregados() {
	return pedidos.every((pe) => pe[PE_ENTREGADO]);
}

// Totalizar con reduce. Por ejemplo, la suma de las fianzas de los libros prestados. Convierte cada importe con aNumero y redondea el resultado a 2 decimales con Math.round(total * 100) / 100.

/**
 * Calcula el importe total de los pedidos entregados
 * (precio del producto × unidades), redondeado a 2 decimales.
 * @returns {number} Importe total de los pedidos entregados
 */
function importeTotalPedidosEntregados() {
	const total = pedidos
		.filter((pe) => pe[PE_ENTREGADO])
		.reduce((total, pe) => total + precioProducto(pe[PE_PRODUCTO]) * pe[PE_UNIDADES], 0);

	return Math.round(total * 100) / 100;
}

/**
 * Devuelve el precio de un producto como número.
 * @param {number} idProducto  Id del producto
 * @returns {number} Precio del producto
 * @throws {Error} Si el precio del producto no es un importe válido
 */
function precioProducto(idProducto) {
	return aNumero(buscarPorIdProducto(idProducto)[PR_PRECIO]);
}

// Lista sin repetidos. Por ejemplo, los autores. Quita los vacíos y ordénala.
/**
 * Devuelve la lista de marcas sin repetidos, sin vacíos y ordenada alfabéticamente.
 * @returns {string[]} Marcas únicas ordenadas
 */
function marcasOrdenadas() {
	const marcas = productos.map((p) => p[PR_MARCA]);
	let unicas = [];
	marcas.forEach((m) => {
		if (!unicas.includes(m) && m !== '') {
			unicas.push(m);
		}
	});
	return unicas.sort((a, b) => a.localeCompare(b));
}

// Hito 3 · Map, Set y funciones avanzadas (también aquí)
//   - un índice Map id → fila que usen tus búsquedas
//   - una agrupación por categoría en un Map
//   - un Set de valores únicos
//   - un closure (por ejemplo, un generador de id)
//   - una función propia que reciba otra función como parámetro
//
// Cada función lleva su comentario JSDoc, por ejemplo:
//
// /**
//  * Devuelve los libros de un género.
//  * @param {Array[]} libros  Lista de libros (cada libro es una fila)
//  * @param {string} genero   Género buscado
//  * @returns {Array[]} Libros de ese género
//  */
// function librosDeGenero(libros, genero) {
//   return libros.filter((libro) => libro[L_GENERO] === genero);
// }
