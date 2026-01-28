// GO GO GO

import express from 'express';
import fs from 'fs';


const app = express();
const PORT = 8080;

//FETCH!
const rawdata = fs.readFileSync('./data/data.json');
const data = JSON.parse(rawdata);
const stock = JSON.stringify(data)
console.log(stock);

//Puerto activo
app.listen(PORT, () => {
    console.log("Puerto activo escuchando en 8080!.");
})


//Endpoints
app.get('/', (req, res) => {
    res.send("<h1>Bienvenido!</h1>")
})

app.get('/products', (req, res) => {
    res.json(`${stock}`)
})