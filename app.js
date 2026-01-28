// GO GO GO

import express from 'express'

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log("Puerto activo escuchando en 8080!.");
})

app.get('/', (req, res) => {
    res.send("<h1>Bienvenido!</h1>")
})