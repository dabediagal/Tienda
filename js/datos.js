// Hito 1 · Datos

// Productos: id, nombre, marca, categoría, stock, precio 
const PR_ID = 0, PR_NOMBRE = 1, PR_MARCA = 2, PR_CATEGORIA = 3, PR_STOCK = 4, PR_PRECIO = 5;

const productos = [
    [1, "Leche entera 1L", "Pascual", "lácteos", 24, "1,15"],
    [2, "Yogur natural pack 4", "Danone", "lácteos", 12, "2,50"],
    [3, "Queso manchego cuña", "García Baquero", "lácteos", 0, "6,90"],
    [4, "Pan de molde", "Bimbo", "panadería", 15, "2,10"],
    [5, "Magdalenas caseras", "", "panadería", 8, "3"],
    [6, "Barra de pan", "", "panadería", 30, "1"],
    [7, "Manzanas golden 1kg", "", "fruta", 20, "2,20"],
    [8, "Plátanos de Canarias 1kg", "", "fruta", 18, "2,75"],
    [9, "Aceite de oliva virgen 1L", "Carbonell", "despensa", 10, "8,95"],
    [10, "Arroz redondo 1kg", "SOS", "despensa", 25, "1,60"],
    [11, "Garbanzos cocidos", "Luengo", "despensa", 14, "1,20"],
    [12, "Café molido", "Marcilla", "despensa", 9, "4,30"],
    [13, "Agua mineral 1,5L", "Font Vella", "bebidas", 40, "0,65"],
    [14, "Zumo de naranja 1L", "Don Simón", "bebidas", 16, "1,85"],
    [15, "Refresco de cola 2L", "Coca-Cola", "bebidas", 22, "2"],
    [16, "Ñoquis de patata", "Rana", "despensa", 6, "2,95"]
];

// Clientes: id, nombre, teléfono 
const CL_ID = 0, CL_NOMBRE = 1, CL_TELEFONO = 2;

const clientes = [
    [1, "María López", "612345678"],
    [2, "José Martínez", "623456789"],
    [3, "Begoña Ruiz", ""],
    [4, "Lucía Fernández", "634567890"],
    [5, "Andrés Gómez", "645678901"],
    [6, "Carmen Núñez", "656789012"]
];

// Pedidos: id, id del cliente, id del producto, unidades, día, entregado 
// Primera fila: el cliente 1 pide 2 unidades del producto 1 el día 3
const PE_ID = 0, PE_CLIENTE = 1, PE_PRODUCTO = 2, PE_UNIDADES = 3, PE_DIA = 4, PE_ENTREGADO = 5;

const pedidos = [
    [1, 1, 1, 2, 3, true],
    [2, 1, 4, 1, 3, true],
    [3, 1, 9, 1, 12, true],
    [4, 1, 13, 6, 45, false],
    [5, 2, 6, 2, 7, true],
    [6, 2, 15, 1, 21, false],
    [7, 3, 7, 1, 15, true],
    [8, 3, 2, 2, 33, true],
    [9, 4, 10, 3, 18, true],
    [10, 4, 12, 1, 40, false],
    [11, 5, 5, 1, 26, true],
    [12, 5, 14, 2, 29, true],
    [13, 2, 11, 4, 58, false]
];
