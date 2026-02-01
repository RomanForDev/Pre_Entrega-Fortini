// GO GO GO

import express from 'express';
import fs from 'fs';
import ProductsManager from './ProductManager.js';


const app = express();
const PORT = 8080;
app.use(express.json());

////////FETCH!////////
const data = JSON.parse(
    fs.readFileSync('./data/data2.json', 'utf-8')
);
// console.log(data);

// const stock = JSON.stringify(data);

////////Puerto activo////////
app.listen(PORT, () => {
    console.log(`Puerto activo escuchando en ${PORT}!.`);
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

    // const id =  data.length + 1;
    const id =  crypto.randomUUID();
    data.push({
        id,
        name,
        price, 
        status, 
        quantity
    })
    //Persistencia sólo desde Thunder.
    let datos = JSON.stringify(data, null, 2);
    fs.writeFileSync('./data/data2.json', datos, 'utf-8'); //data para local. data2 para ProductManager
    console.log(datos);
    res.json({ status: 'success', dataProvide: {id}})
})

// Modelo ejemplo para probar persistencia!
// {"name": "Chocotorta", 
// "price": 2300, 
// "status": true, 
// "quantity": 8}


// Modificar un producto.

// app.put("/products/:id", (req, res) => {
//     const { id } = req.params;
//     const dataFind = data.findIndex(item => item.id == id)
//     const modifier = req.body;
//     if(modifier == 0
//     ){} // Acá.
// })

// Eliminar un producto.


//Carrito

app.post('/cart/products/:id', (req,res) => {
    const { id } = req.params;
    const producto = data.find(item => item.id == id);
    console.log(producto);
    
    // JSON.parse(cart);
    fs.writeFileSync('./data/cart.json', JSON.stringify(producto), 'utf-8');
    res.json({ status: 'success', dataProvide: {id}});
})

//prueba de la respuesta del carrito.
// app.get('/cart/products/:id', (req,res) => {
//     const { id } = req.params;
//     const producto = data.find(item => item.id == id);
//     res.json(producto)
// })

//Desestructuracion

const cart = []
const carrito = JSON.parse(fs.readFileSync('./data/cart.json'));
cart.push(carrito)
const carroDef = JSON.stringify(cart);


app.get('/cart', (req, res) => {
    res.send(`<h3>Su carrito de Compras es ${carroDef}: </h3>`)
})

/////Escritura Data2 (bucle, usado sólo una vez)/////

// const ProdManager = new ProductsManager
// const prod1= ProdManager.createProduct("Selva Negra", 5000, true, 5)
// const prod2= ProdManager.createProduct("Tres Leches", 3500, false, 0)
// const prod3= ProdManager.createProduct("Cheesecake", 4500, true, 3)
// const prod4= ProdManager.createProduct("Carrot Cake", 3000, true, 2)
// const prod5= ProdManager.createProduct("Lemon Pie", 3700, true, 7)
// const prod6= ProdManager.createProduct("Red Velvet", 5000, true, 2)
// const prod7= ProdManager.createProduct("Rogel", 4500, true, 4)
// const prod8= ProdManager.createProduct("Torta Sacher", 6000, false, 0)
// const prod9= ProdManager.createProduct("Balcarce", 4200, true, 6)
// const prod10= ProdManager.createProduct("Pavlova", 3000, true, 3)

