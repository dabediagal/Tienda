# Fase 1 · Núcleo de datos

**Alumno/a:** Daniela Betsabe Díaz Gallese
**Dominio:** Tienda de barrio

## Cómo se abre

- `index.html` abre el menú. El programa funciona en la consola del navegador (F12).
- `pruebas.html` muestra el resultado de las pruebas.

Se abren con doble clic o con Live Server. No hay que instalar nada.

## Regla personal

Descuento por compra: un 5 % a partir de 20 € y un 10 % a partir de 50 €. aplicarDescuento(total) devuelve el total con el descuento, ...

## Por qué uso Map y Set

Al usar Map como índice, los elementos se encuentran directamente con get, mientras que con un array y find hay que recorrer todas las filas hasta encontrar el elemento. Con Map es mucho más cómodo agrupar y organizar por categorías porque tengo cada categoría ya hecha y consulto los productos con get, en lugar de filtrar el array de productos cada vez. Utilizando Set se eliminan los duplicados fácilmente; con un array tendría que ir mirando uno a uno si está repetido o no.

## Diario

Una entrada al final de cada sesión: fecha, qué has hecho y qué te ha costado o qué has preguntado.

- 30/10/2026 · Hecho: He creado los 3 arrays con los datos iniciales de la tienda.
  Me ha costado: En el hito 1 nada exactamente, porque lo hice siguiendo el ejemplo del profesor.
  He preguntado: Nada.

- 03/11/2026 · Hecho: He creado funciones para consultar los datos que introduje la clase pasada y he probado cada una.
  Me ha costado: Nada en especial.
  He preguntado: Cómo podemos comprobar que las listas de datos originales no han sido modificadas.

- 03/11/2026 · Hecho: índices Map de productos y clientes (buscarProducto y buscarCliente con get), agrupación de productos por categoría en un Map con reduce, Set de categorías, marcas sin repetir con Set, generador de ids con closure y filtrarPor como función de orden superior.
  Me ha costado: el reduce de productosPorCategoria. Al principio no devolvía el mapa y daba error en la segunda vuelta, y con el else se perdía el primer producto de cada categoría. Lo arreglé sacando el push fuera del if.
  He preguntado: cómo funcionan find, sort, map y reduce, y en qué fichero va cada función.


## Uso de IA

- Herramienta: Claude 
- Para qué la usé (explicar, depurar, generar código): La use para generar datos, calcular datos para comprobar que las pruebas pasan correctamente. Para obtener mas información de cómo funciona find, sort, map y reduce.
- Qué le pedí (resumen): que me genere datos para los arrays, que calcule por su cuenta el resultado de las funciones que yo implementé para comparar los resultados, que me ayude a entender cómo funcionan find, sort, map y reduce.
- Qué cambié yo y por qué:
- Qué he aprendido: He aprendido a usar find, sort, map y reduce.

## Git (opcional)

https://github.com/dabediagal/Tienda
