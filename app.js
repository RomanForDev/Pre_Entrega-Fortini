// GO GO GO

import express from 'express';
import fs from 'fs';


const app = express();
const PORT = 8080;

//FETCH!
const data = JSON.parse(
    fs.readFileSync('./data/data.json', 'utf-8')
);
console.log(data);

const stock = JSON.stringify(data);

//Puerto activo
app.listen(PORT, () => {
    console.log("Puerto activo escuchando en 8080!.");
})

//Endpoints
app.get('/', (req, res) => {
    res.send("<h1>Bienvenido!</h1>")
})

app.get('/products', (req, res) => {
    res.json(`${[stock]}`) //Puede ser res.send también.
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const producto = data.find(item => item.id == id);
    res.json(JSON.stringify(producto));
})

// Agregar un producto.

// Modificar un producto.

// Eliminar un producto.