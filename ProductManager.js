import crypto from 'crypto'
import fs from 'fs/promises'
const path = './data/data2.json';

//Esto causa un bucle.//
class ProductsManager {
    constructor(){
        this.products = []
    }

    async createProduct(name, price, status, quantity) {
        // const { name, price, status, quantity } = product;
        const id = crypto.randomUUID();

        this.products.push({
            id,
            name,
            price,
            status,
            quantity
        });
        console.log(this.products);
        
        const text = JSON.stringify( this.products, null, 2)
        await fs.writeFile(path, text);
    }

    async getProducts() {
        try {        
            const data = await fs.readFile( path, 'utf-8');
            this.products = JSON.parse(data);
            return this.products
        } catch (error) {
            console.error(error)
            return []
        }

    }
}


export default ProductsManager