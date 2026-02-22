// GO GO GO

import express from 'express';
import fs from 'fs';


const app = express();
const PORT = 8080;
app.use(express.json());

////////FETCH!////////
const data = JSON.parse(
    fs.readFileSync('./data/data2.json', 'utf-8')
);

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


// Eliminar un producto.

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const index = data.findIndex(item => item.id == id);
    if(index != -1){
        data.splice(index, 1)
        console.log(data);
        fs.writeFileSync('./data/data2.json', JSON.stringify(data, null, 2), 'utf-8')
        res.json({status: "success"})
    };
})

//Carrito

//Desestructuracion

const cart = []
const carrito = JSON.parse(fs.readFileSync('./data/cart.json'));
cart.push(carrito)
const carroDef = JSON.stringify(cart);

//Agregar al carrito.

app.post('/cart/products/:id', (req,res) => {
    const { id } = req.params;
    const productoCarro = data.find(item => item.id == id);
    console.log(productoCarro);
    // JSON.parse(cart);
    fs.writeFileSync('./data/cart.json', JSON.stringify(productoCarro), 'utf-8');
    res.json({ status: 'success', dataProvide: {id}});
})


//Ver carrito en navegador.

app.get('/cart', (req, res) => {
    res.send(`<h3>Su carrito de Compras es ${carroDef}: </h3>`)
})

////////Puerto activo////////
app.listen(PORT, () => {
    console.log(`Puerto activo escuchando en ${PORT}!.`);
})



