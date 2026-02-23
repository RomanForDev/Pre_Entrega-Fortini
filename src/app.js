// GO GO GO

import express from 'express';
import fs from 'fs';
import productsRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';
import path from 'path';


const app = express();
const PORT = 8080;
app.use(express.json());


////////Endpoints////////

//General
app.get('/', (req, res) => {
    res.send("<h1>Bienvenido!</h1>")
})


app.use('/api/products', productsRouter);

app.use('/api/cart', cartRouter);


////////Puerto activo////////
app.listen(PORT, () => {
    console.log(`Puerto activo escuchando en ${PORT}!.`);
})



