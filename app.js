// GO GO GO

import express from 'express';
import fs from 'fs';


const app = express();
const PORT = 8080;

////////FETCH!////////
const data = JSON.parse(
    fs.readFileSync('./data/data.json', 'utf-8')
);
console.log(data);

// const stock = JSON.stringify(data);

////////Puerto activo////////
app.listen(PORT, () => {
    console.log("Puerto activo escuchando en 8080!.");
})

////////Endpoints////////

//General
app.get('/', (req, res) => {
    res.send("<h1>Bienvenido!</h1>")
})

//Productos
app.get('/products', (req, res) => {
    res.send(data);
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const producto = data.find(item => item.id == id);
    res.json(producto);
})

// Agregar un producto.

// Modificar un producto.

// Eliminar un producto.

//Carrito

app.get('/cart', (req, res) => {
    res.send(`<h3>Su carrito de Compras: </h3>`)
})