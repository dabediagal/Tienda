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

// Borra esta prueba cuando escribas la primera tuya.

// A número:
prueba("aNumero devuelve el numero 3", () => {
    igual(aNumero('3,5'), 3.5);
});

// Buscar por id:
prueba("buscarPorIdProducto devuelve el producto 3", () => {
    igual(buscarPorIdProducto(3)[PR_NOMBRE], 'Queso manchego cuña');
});

prueba('buscarPorIdCliente devuelve el cliente 5', () => {
	igual(buscarPorIdCliente(5)[CL_NOMBRE], 'Andrés Gómez');
});

prueba('buscarPorIdPedido devuelve el pedido 9', () => {
	igual(buscarPorIdPedido(9)[PE_PRODUCTO], 10);
});

// Filtrar por un criterio:
// Uso map porque buscar por categoria me devuelve varias filas. Uso map para solamente sacar el id del producto.
prueba('buscarPorCategoria devuelve los id de los productos dentro de la categoría bebidas', () => {
	igual(
		buscarPorCategoria('bebidas').map((p) => p[PR_ID]),
		[13, 14, 15]
	);
});

// Ordenar por dos criterios:
prueba('productosOrdenados devuelve los id de los productos ordenados por categoria y por nombre.', () => {
	igual(
		productosOrdenados().map((p) => p[PR_ID]),
		[13, 15, 14, 9, 10, 12, 11, 16, 7, 8, 1, 3, 2, 6, 5, 4]
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

// Lista sin repetidos:
prueba("las marcas salen sin repetir", () => {
    igual(marcasOrdenadas(), ['Bimbo', 'Carbonell', 'Coca-Cola', 'Danone', 'Don Simón', 'Font Vella', 'García Baquero', 'Luengo', 'Marcilla', 'Pascual', 'Rana', 'SOS']);
});