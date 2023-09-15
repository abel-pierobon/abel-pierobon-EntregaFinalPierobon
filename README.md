# PROYECTO DE REACT js-CODERHOUSE-

## APP "SOLO GUITARRAS"

### Descripción del Proyecto
El proyecto es realizado para un e-commerce dedicado a la venta de guitarras y en el cual se pueden visualizar 18 
productos de distintas categorías que son importadas de una base de datos de Firebase.
La aplicación permite realizar filtros, utilizando rutas, por categoría en relación al sonido de las guitarras, pudiendo ser acústico, 
eléctrico o clásico. Además permite filtrar por menor o mayor precio y además por los 6 productos más vendidos. 
El proyecto permite visualizar el detalle de cada producto, seleccionar cantidades y agregar al carrito, cuando
eso sucede se actualiza la cantidad en stock en la base de datos en firebase, reservando dicho producto.
En la sección de carrito se pueden seguir añadiendo o quitando cantidades de productos, en caso de eliminarlo el stock
se recupera en la base de datos. 
Al realizar el pedido se genera el comprobante de pedido y se lo suministra al cliente.

### Listado de tecnologias usadas
El proyecto se creo utilizando react version 18.2.0, react-dom versión 18.2.0 y react-router-dom versión 6.15.0.
La base de datos se generó utilizando Firebase versión 10.3.1. 
Para los estilos se utilizo sass y el framework CSS taelwind.
Para las notificaciones de comunicación con el usuario se utilizó sonner toast.

### Usos e instalaciones 
Para utilizar la aplicación se debe primero crear el entorno a traves del npx create-react-app nombre-de-tu-proyecto
Luégo se debe navegar al directorio del proyecto, y ejecutar npm start. 
Además se debe instalar para las rutas react-router-dom con el siguiente comando npm install react-router-dom.
Para los estilos el framework taelwind npm install tailwindcss.
Para la gestión de base de datos Firebase  npm install firebase.

### Live Demo
[link] https://clipchamp.com/watch/c4az1O5La09 
