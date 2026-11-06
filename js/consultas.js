// Hito 3 · Map, Set y funciones avanzadas (también aquí)
//   - un índice Map id → fila que usen tus búsquedas
/**
 * Crea un índice que relaciona el id de cada fila con la fila completa.
 * @param {Array[]} lista  Lista de filas (productos, clientes o pedidos)
 * @param {number} posId   Posición del id dentro de cada fila, por ejemplo PR_ID
 * @returns {Map<number, Array>} Map id → fila
 */
function crearIndice(lista, posId) {
	return new Map(lista.map((fila) => [fila[posId], fila]));
}

const indiceProductos = crearIndice(productos, PR_ID);
const indiceClientes = crearIndice(clientes, CL_ID);

//   - una agrupación por categoría en un Map
/**
 * Agrupa los nombres de los productos por su categoría.
 * @returns {Map<string, string[]>} Map categoría → nombres de los productos de esa categoría
 */
function productosPorCategoria() {
	return productos.reduce((mapa, fila) => {
		const categoria = fila[PR_CATEGORIA];

		if (!mapa.has(categoria)) {
			mapa.set(categoria, []);
		}

		mapa.get(categoria).push(fila[PR_NOMBRE]);
		return mapa;
	}, new Map());
}

//   - un Set de valores únicos
/**
 * Devuelve las categorías de los productos sin repetidos.
 * @returns {Set<string>} Categorías únicas
 */
function categorias() {
	return new Set(productos.map((fila) => fila[PR_CATEGORIA]));
}

//   - un closure (por ejemplo, un generador de id)
/**
 * Crea un generador de ids que empieza después del último id usado.
 * Cada llamada a la función devuelta da el siguiente id (closure).
 * @param {number} ultimo  Último id usado, por ejemplo 16
 * @returns {function(): number} Función que devuelve un id nuevo cada vez que se llama
 */
function crearGeneradorId(ultimo) {
	let actual = ultimo;
	return () => {
		actual++;
		return actual;
	};
}

//   - una función propia que reciba otra función como parámetro
/**
 * Devuelve las filas de una lista que cumplen una condición.
 * No modifica la lista original.
 * @param {Array[]} lista  Lista de filas a filtrar
 * @param {function(Array): boolean} condicion  Función que recibe una fila y devuelve true si se queda
 * @returns {Array[]} Filas que cumplen la condición (lista vacía si no hay ninguna)
 */
function filtrarPor(lista, condicion) {
	return lista.filter(condicion);
}

/**
 * Convierte un texto con un importe (admite coma decimal) en un número.
 * @param {string|number} texto  Importe a convertir, por ejemplo "2,50"
 * @returns {number} El importe como número
 * @throws {Error} Si el texto está vacío o no es un número válido
 */
function aNumero(texto) {
	const limpio = String(texto).trim().replace(",", ".");

	const numero = Number(limpio);

	if (limpio === "" || Number.isNaN(numero)) {
		throw new Error("Importe no válido");
	}

	return numero;
}

// Buscar por ID:
/**
 * Busca un producto por su id.
 * @param {number} id  Id del producto buscado
 * @returns {Array|undefined} La fila del producto, o undefined si no existe
 */
function buscarProducto(id) {
	return indiceProductos.get(id);
}

/**
 * Busca un cliente por su id.
 * @param {number} id  Id del cliente buscado
 * @returns {Array|undefined} La fila del cliente, o undefined si no existe
 */
function buscarCliente(id) {
	return indiceClientes.get(id);
}

/**
 * Busca un pedido por su id.
 * @param {number} id  Id del pedido buscado
 * @returns {Array|undefined} La fila del pedido, o undefined si no existe
 */
function buscarPedido(id) {
	return pedidos.find((fila) => fila[PE_ID] === id);
}

// Filtrar por un criterio:
/**
 * Devuelve los productos de una categoría.
 * @param {string} categoria  Categoría buscada, por ejemplo "lácteos"
 * @returns {Array[]} Productos de esa categoría (lista vacía si no hay ninguno)
 */
function buscarPorCategoria(categoria) {
	return filtrarPor(productos, (fila) => fila[PR_CATEGORIA] === categoria);
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
	return aNumero(buscarProducto(idProducto)[PR_PRECIO]);
}

// Lista sin repetidos. Por ejemplo, los autores. Quita los vacíos y ordénala.
/**
 * Devuelve la lista de marcas sin repetidos, sin vacíos y ordenada alfabéticamente.
 * @returns {string[]} Marcas únicas ordenadas
 */
function marcasOrdenadas() {
	const marcas = productos.map((fila) => fila[PR_MARCA]).filter((marca) => marca !== "");

	const unicas = new Set(marcas);

	return [...unicas].sort((a, b) => a.localeCompare(b));
}
