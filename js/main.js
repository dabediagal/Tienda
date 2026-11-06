// Menú del programa. Se ejecuta al abrir index.html.

/**
 * Pide un número entero con prompt.
 * @param {string} [mensaje="Escribe un número"]  Texto que se muestra en la ventana
 * @returns {number|null} El número escrito, o null si el usuario cancela
 * @throws {Error} Si lo escrito está vacío o no es un número entero
 * @example pedirEntero("Id del pedido") // el usuario escribe " 7 " → 7
 */
function pedirEntero(mensaje = "Escribe un número") {
	const texto = prompt(mensaje);

	if (texto === null) return null; // Si el usuario pulsa cancelar devuelve null.

	const limpio = texto.trim();
	// Uso Number y no parseInt porque parseInt("3abc") da 3 y aceptaría letras. El vacío lo miro aparte porque Number("") da 0.
	const numero = Number(limpio);

	if (limpio === "" || !Number.isInteger(numero)) {
		throw new Error("Debes escribir un número entero");
	}

	return numero;
}

/**
 * Convierte un importe en texto con coma decimal y 2 decimales.
 * @param {number} numero  Importe, por ejemplo 28.5
 * @returns {string} Importe como texto, por ejemplo "28,50"
 */
function aTexto(numero) {
	return numero.toFixed(2).replace(".", ",");
}

/**
 * Pide una categoría y muestra sus productos en una tabla.
 * @throws {Error} Si no hay productos de esa categoría
 */
function mostrarCategoria() {
	const texto = prompt(`Categoría (${[...categorias()].join(", ")})`);
	if (texto === null) return;

	const lista = buscarPorCategoria(texto.trim().toLowerCase());
	if (lista.length === 0) throw new Error("No hay productos de esa categoría");

	console.table(lista);
}

/**
 * Pide el id de un pedido y muestra su total con y sin el descuento de la regla personal.
 * @param {Array[]} listaPedidos  Lista actual de pedidos
 * @throws {Error} Si el id no es un entero o el pedido no existe
 */
function mostrarTotalConDescuento(listaPedidos) {
	const id = pedirEntero("Id del pedido");
	if (id === null) return;

	// Uso la lista actual y no buscarPedido porque buscarPedido no ve los pedidos creados desde el menú.
	const pedido = listaPedidos.find((fila) => fila[PE_ID] === id);
	if (pedido === undefined) throw new Error("Pedido no encontrado");

	const total = totalPedido(pedido);
	alert(`Total: ${aTexto(total)} €\nCon descuento: ${aTexto(aplicarDescuento(total))} €`);
}

/**
 * Pide los datos de un pedido nuevo y lo añade a la lista.
 * @param {Array[]} listaPedidos  Lista actual de pedidos
 * @param {function(): number} generarId  Generador de ids
 * @returns {Array[]} Lista nueva con el pedido, o la misma si el usuario cancela
 * @throws {Error} Si algún dato no es válido
 */
function pedirNuevoPedido(listaPedidos, generarId) {
	const idCliente = pedirEntero("Id del cliente");
	if (idCliente === null) return listaPedidos;
	const idProducto = pedirEntero("Id del producto");
	if (idProducto === null) return listaPedidos;
	const unidades = pedirEntero("Unidades");
	if (unidades === null) return listaPedidos;
	const dia = pedirEntero("Día (1-60)");
	if (dia === null) return listaPedidos;

	const nueva = crearPedido(listaPedidos, idCliente, idProducto, unidades, dia, generarId);
	alert("Pedido creado");
	return nueva;
}

/**
 * Pide el id de un pedido y lo borra si el usuario lo confirma.
 * @param {Array[]} listaPedidos  Lista actual de pedidos
 * @returns {Array[]} Lista nueva sin el pedido, o la misma si cancela o no confirma
 * @throws {Error} Si el id no es un entero o el pedido no existe
 */
function pedirBorrarPedido(listaPedidos) {
	const id = pedirEntero("Id del pedido a borrar");
	if (id === null) return listaPedidos;

	// Llamo a borrarPedido antes del confirm para que avise si el id no existe; como no modifica la lista, si dice que no, no se pierde nada.
	const nueva = borrarPedido(listaPedidos, id);
	if (!confirm(`¿Seguro que quieres borrar el pedido ${id}?`)) return listaPedidos;

	alert(`Pedido ${id} borrado`);
	return nueva;
}

/**
 * Muestra el menú principal hasta que el usuario elige salir o cancela.
 */
function menu() {
	let pedidosActuales = [...pedidos];
	const siguienteId = crearGeneradorId(pedidos.length);
	let seguir = true;

	while (seguir) {
		const opcion = prompt(
			"1. Ver productos\n2. Ver clientes\n3. Ver pedidos\n" +
				"4. Productos de una categoría\n5. Productos ordenados\n6. Marcas\n" +
				"7. Total de un pedido con descuento\n8. Crear pedido\n9. Borrar pedido\n0. Salir"
		);
		if (opcion === null || opcion.trim() === "0") {
			seguir = false;
			continue;
		}
		try {
			switch (opcion.trim()) {
				case "1":
					console.table(productos);
					break;
				case "2":
					console.table(clientes);
					break;
				case "3":
					console.table(pedidosActuales);
					break;
				case "4":
					mostrarCategoria();
					break;
				case "5":
					console.table(productosOrdenados());
					break;
				case "6":
					console.table(marcasOrdenadas());
					break;
				case "7":
					mostrarTotalConDescuento(pedidosActuales);
					break;
				case "8":
					pedidosActuales = pedirNuevoPedido(pedidosActuales, siguienteId); // Si el usuario cancela, pedirNuevoPedido devuelve la misma lista y no cambia nada.
					break;
				case "9":
					pedidosActuales = pedirBorrarPedido(pedidosActuales);
					break;
				default:
					alert("Opción no válida");
			}
		} catch (error) {
			alert(`Error: ${error.message}`);
		}
	}
}

menu();
