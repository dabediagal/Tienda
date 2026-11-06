# Fase 1 · Núcleo de datos

**Alumno/a:** Daniela Betsabe Díaz Gallese
**Dominio:** Tienda de barrio

## Cómo se abre

- `index.html` abre el menú. El programa funciona en la consola del navegador (F12).
- `pruebas.html` muestra el resultado de las pruebas.

Se abren con doble clic o con Live Server. No hay que instalar nada.

## Regla personal

Descuento por compra: un 5 % a partir de 20 € y un 10 % a partir de 50 €. aplicarDescuento(total) devuelve el total con el descuento, redondeado a 2 decimales.
Ejemplo: 19,99 € → 19,99 €. 20 € → 19 €. 30 € → 28,50 €. 60 € → 54 €.
Válido si: Funciona dentro de tu proyecto, en js/regla.js, y tiene al menos 2 pruebas en js/pruebas.js: una del caso normal y otra del límite o del error.

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

- 04/11/2026 · Hecho: índices Map de productos y clientes (buscarProducto y buscarCliente con get), agrupación de productos por categoría en un Map con reduce, Set de categorías, marcas sin repetir con Set, generador de ids con closure y filtrarPor como función de orden superior.
  Me ha costado: el reduce de productosPorCategoria. Al principio no devolvía el mapa y daba error en la segunda vuelta, y con el else se perdía el primer producto de cada categoría. Lo arreglé sacando el push fuera del if.
  He preguntado: cómo funcionan find, sort, map y reduce, y en qué fichero va cada función.

- 06/11/2026 · Hecho: regla personal (aplicarDescuento), alta y baja de pedidos (crearPedido y borrarPedido) que lanzan errores y devuelven una lista nueva, y el menú con prompt, confirm, alert y console.table.
  Me ha costado: Fallo con el depurador: la opción 7 del menú daba «number is not defined». Puse un punto de interrupción en pedirEntero y fui paso a paso con F10. En el panel Scope vi que la variable se llamaba numero y yo había escrito number. Lo corregí.
  He preguntado: cómo hacer que el menú no se rompa al cancelar a mitad de crear un pedido.


## Uso de IA

- Herramienta: Claude 
- Para qué la usé (explicar, depurar, generar código): La use para generar datos, calcular datos para comprobar que las pruebas pasan correctamente. Para obtener mas información de cómo funciona find, sort, map y reduce. Para preguntarle cómo funciona el debugger del navegador.
- Qué le pedí (resumen): que me genere datos para los arrays, que calcule por su cuenta el resultado de las funciones que yo implementé para comparar los resultados, que me ayude a entender cómo funcionan find, sort, map y reduce. Le pedí que revisara partes de mi código y me dijera que puedo mejorar. Que me ayudara a entender como funciona el debugger.
- Qué cambié yo y por qué: Revisé línea a línea todo lo que me propuso para asegurarme de que lo entendía y de que solo usaba cosas vistas en clase, porque tengo que saber explicarlo. Quité código que sobraba (las llamadas sueltas a siguienteProducto en consultas.js) y añadí comentarios donde quería recordar por qué se hace algo.
- Qué he aprendido: He aprendido a usar find, sort, map y reduce. A usar el debugger del navegador.

## Git (opcional)

https://github.com/dabediagal/Tienda
