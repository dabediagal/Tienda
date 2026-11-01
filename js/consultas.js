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

function aNumero(texto) {
	const limpio = String(texto).trim().replace(',', '.');

	const numero = Number(limpio);

	if (limpio === '' || Number.isNaN(numero)) {
		throw new Error('Importe no válido');
	}

	return numero;
} 

// Buscar por ID:
function buscarPorIdProducto(id){
    return productos.find((fila) => fila[PR_ID] === id);
}

function buscarPorIdCliente(id){
    return clientes.find((fila) => fila[CL_ID] === id);
}

function buscarPorIdPedido(id) {
    return pedidos.find((fila) => fila[PE_ID] === id);
}

// Filtrar por un criterio:
function buscarPorCategoria(categoria){
    return productos.filter((p) => p[PR_CATEGORIA] === categoria);
}

// Ordenar por dos criterios:



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

