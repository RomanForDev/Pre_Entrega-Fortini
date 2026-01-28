Consigna:
Desarrollar un servidor que contenga los endpoints y servicios necesarios para gestionar los productos y carritos de compra para tu API.
Requisitos de la Primera Entrega
Desarrollo del Servidor
El servidor debe estar basado en Node.js y Express, y debe escuchar en el puerto  8080. Se deben disponer dos grupos de rutas: /products y /carts. Estos endpoints estarán implementados con el router de Express, con las siguientes especificaciones:

Rutas para Manejo de Carritos (/api/carts/)
POST /:
Debe crear un nuevo carrito con la siguiente estructura:
id: Number/String (Autogenerado para asegurar que nunca se dupliquen los ids).
products: Array que contendrá objetos que representen cada producto.
GET /:cid:
Debe listar los productos que pertenecen al carrito con el cid proporcionado.
POST /:cid/product/:pid:
Debe agregar el producto al arreglo products del carrito seleccionado, utilizando el siguiente formato:
product: Solo debe contener el ID del producto.
quantity: Debe contener el número de ejemplares de dicho producto (se agregará de uno en uno).
• • Si un producto ya existente intenta agregarse, se debe incrementar el campo 
quantity de dicho producto.
Persistencia de la Información
La persistencia se implementará utilizando el sistema de archivos, donde los archivos products.json y carts.json respaldarán la información.
Se debe utilizar el ProductManager desarrollado en el desafío anterior y crear un CartManager para gestionar el almacenamiento de estos archivos JSON.
• • Nota: No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.
