import express from 'express';
const router = express.Router();
import fs from 'fs';


//Carrito

//Desestructuracion

const cart = []
const carrito = JSON.parse(fs.readFileSync('./data/cart.json'));
cart.push(carrito)
const carroDef = JSON.stringify(cart);

//Agregar al carrito.

router.post('/:id', (req,res) => {
    const { id } = req.params;
    const productoCarro = data.find(item => item.id == id);
    console.log(productoCarro);
    fs.writeFileSync('./data/cart.json', JSON.stringify(productoCarro), 'utf-8');
    res.json({ status: 'success', dataProvide: {id}});
})


//Ver carrito en navegador.

router.get('/', (req, res) => {
    res.send(`<h3>Su carrito de Compras es ${carroDef}: </h3>`)
})

export default router
