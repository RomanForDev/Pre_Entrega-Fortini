// GO GO GO

import express from 'express';
import fs from 'fs';


const app = express();
const PORT = 8080;
app.use(express.json());

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

app.post('/products', (req, res) => {
    const {name, price, status, quantity} = req.body;

    const id =  data.length + 1;
    data.push({
        id,
        name,
        price, 
        status, 
        quantity
    })
    //Persistencia:
    let datos = JSON.stringify(data, null, 2);
    fs.writeFileSync('./data/data.json', datos, 'utf-8');
    console.log(datos);
    res.json({ status: 'success', dataProvide: {id}})
})

// {"name": "Pavlova", 
// "price": 3000, 
// "status": true, 
// "quantity": 3} Modelo ejemplo


// Modificar un producto.

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const dataFind = data.findIndex(item => item.id == id)
    const modifier = req.body;
    if(modifier == 0
    ){} // Acá.
    
})
// Eliminar un producto.

//Carrito

app.get('/cart', (req, res) => {
    res.send(`<h3>Su carrito de Compras: </h3>`)
})