// Pruebas de tu proyecto. Se ven al abrir pruebas.html.
//
// Funciones que tienes (están en mini-pruebas.js):
//   prueba(nombre, fn)               define una prueba
//   igual(obtenido, esperado)        números, textos, arrays, Map y Set
//   casiIgual(obtenido, esperado)    decimales (2 por defecto)
//   lanzaError(fn, mensaje)          comprueba que se lanza un error con ese mensaje
//
// Ejemplos (cámbialos por los de tu proyecto):
//
// prueba("buscarPorId devuelve el libro 3", () => {
//   igual(buscarPorId(3)[L_TITULO], "Niebla");
// });
//
// prueba("los géneros salen sin repetir", () => {
//   igual(generos(libros), new Set(["poesía", "novela"]));
// });
//
// prueba("prestar falla si el socio no existe", () => {
//   lanzaError(() => prestar(99, 1), "Socio no encontrado");
// });
//
// Necesitas 10 pruebas o más, 2 de ellas de tu regla personal.

// A número:
prueba('aNumero devuelve el numero 3', () => {
	igual(aNumero('3,5'), 3.5);
});

prueba('aNumero lanza un error si el texto no es un número', () => {
	lanzaError(() => aNumero('abc'), 'Importe no válido');
});

// Buscar por id:
prueba('buscarProducto devuelve el producto 3', () => {
	igual(buscarProducto(3)[PR_NOMBRE], 'Queso manchego cuña');
});

prueba('buscarProducto devuelve el producto 16', () => {
	igual(buscarProducto(16)[PR_NOMBRE], 'Ñoquis de patata');
});

prueba('buscarProducto devuelve undefined si el producto no existe', () => {
	igual(buscarProducto(99), undefined);
});

prueba('buscarCliente devuelve el cliente 5', () => {
	igual(buscarCliente(5)[CL_NOMBRE], 'Andrés Gómez');
});

prueba('buscarCliente devuelve undefined si el cliente no existe', () => {
	igual(buscarCliente(99), undefined);
});

prueba('buscarPedido devuelve el pedido 9', () => {
	igual(buscarPedido(9)[PE_PRODUCTO], 10);
});

prueba('buscarPedido devuelve undefined si el pedido no existe', () => {
	igual(buscarPedido(99), undefined);
});

// Filtrar por un criterio:
// Uso map porque buscar por categoria me devuelve varias filas. Uso map para solamente sacar el id del producto.
prueba('buscarPorCategoria devuelve los id de los productos dentro de la categoría bebidas', () => {
	igual(
		buscarPorCategoria('bebidas').map((p) => p[PR_ID]),
		[13, 14, 15]
	);
});

prueba('buscarPorCategoria devuelve una lista vacía si la categoría no existe', () => {
	igual(buscarPorCategoria('congelados'), []);
});

prueba('buscarPorMarca devuelve los id de los productos de la marca Pascual', () => {
	igual(
		buscarPorMarca('Pascual').map((p) => p[PR_ID]),
		[1]
	);
});

prueba('buscarPorMarca devuelve una lista vacía si la marca no existe', () => {
	igual(buscarPorMarca('Nestlé'), []);
});

prueba('buscarPedidosEntregados(true) devuelve los id de los pedidos entregados', () => {
	igual(
		buscarPedidosEntregados(true).map((p) => p[PE_ID]),
		[1, 2, 3, 5, 7, 8, 9, 11, 12]
	);
});

prueba('buscarPedidosEntregados(false) devuelve los id de los pedidos pendientes', () => {
	igual(
		buscarPedidosEntregados(false).map((p) => p[PE_ID]),
		[4, 6, 10, 13]
	);
});

// Ordenar por dos criterios:
prueba(
	'productosOrdenados devuelve los id de los productos ordenados por categoria y por nombre.',
	() => {
		igual(
			productosOrdenados().map((p) => p[PR_ID]),
			[13, 15, 14, 9, 10, 12, 11, 16, 7, 8, 1, 3, 2, 6, 5, 4]
		);
	}
);

prueba('productosOrdenados no modifica el orden de la lista original', () => {
	productosOrdenados();
	igual(
		productos.map((p) => p[PR_ID]),
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
	);
});

// Comprobar una condición: some o every.
prueba('hayProductosAgotados devuelve si hay algún producto agotado (true)', () => {
	igual(hayProductosAgotados(), true);
});

prueba('todosEntregados devuelve si todos los productos están entregados (false)', () => {
	igual(todosEntregados(), false);
});

// Totalizar con reduce:
prueba(
	'importeTotalPedidosEntregados devuelve el total de la suma de los pedidos entregados',
	() => {
		igual(importeTotalPedidosEntregados(), 34.05);
	}
);

// Consultar el precio de un producto ya transformado a número.
prueba('precioProducto devuelve el precio del producto 5', () => {
	igual(precioProducto(5), 3);
});

prueba('precioProducto convierte el precio con coma decimal del producto 13', () => {
	casiIgual(precioProducto(13), 0.65);
});

// Lista sin repetidos:
prueba('las marcas salen sin repetir', () => {
	igual(marcasOrdenadas(), [
		'Bimbo',
		'Carbonell',
		'Coca-Cola',
		'Danone',
		'Don Simón',
		'Font Vella',
		'García Baquero',
		'Luengo',
		'Marcilla',
		'Pascual',
		'Rana',
		'SOS'
	]);
});

// Hito 3 · Map, Set y funciones avanzadas
// Agrupación por categoría en un Map:
prueba('productosPorCategoria devuelve los nombres de los productos de la categoría fruta', () => {
	igual(productosPorCategoria().get('fruta'), ['Manzanas golden 1kg', 'Plátanos de Canarias 1kg']);
});

prueba('productosPorCategoria tiene 5 categorías', () => {
	igual(productosPorCategoria().size, 5);
});

// Set de valores únicos:
prueba('categorias devuelve el Set con las categorías sin repetir', () => {
	igual(categorias(), new Set(['lácteos', 'panadería', 'fruta', 'despensa', 'bebidas']));
});

// Closure:
prueba('crearGeneradorId da ids seguidos: 13 y 14', () => {
	const siguiente = crearGeneradorId(12);
	igual(siguiente(), 13);
	igual(siguiente(), 14);
});

prueba('crearGeneradorId: dos generadores no se pisan', () => {
	const primero = crearGeneradorId(12);
	const segundo = crearGeneradorId(12);
	primero();
	primero();
	igual(segundo(), 13);
});

// Función que recibe otra función como parámetro:
// Uso map para sacar solo el id de las filas que devuelve filtrarPor.
prueba('filtrarPor con stock 0 devuelve solo el queso (id 3)', () => {
	igual(
		filtrarPor(productos, (p) => p[PR_STOCK] === 0).map((p) => p[PR_ID]),
		[3]
	);
});
