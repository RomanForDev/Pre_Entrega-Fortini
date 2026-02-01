// import crypto from 'crypto'
// import fs from 'fs/promises'
// const path = './data/data.json';

// class ProductsManager {
//     constructor(){
//         this.products = []
//     }
//     static id = 0

//     async createProduct(product) {
//         const { name, price, status, quantity } = product;
//         id++;
//         // const hash = crypto.createHash('sha256');
//         // const id = crypto.randomUUID();


//         this.products.push({
//             id,
//             name,
//             price,
//             status,
//             quantity
//         });
//         const text = JSON.stringify( this.products, null, 2)
//         await fs.writeFile(path, text);
        
//     }

//     async getProducts() {
//         try {        
//             const data = await fs.readFile( path, 'utf-8');
//             this.products = JSON.parse(data);
//             return this.products
//         } catch (error) {
//             console.error(error)
//             return []
//         }

//     }

//     auth(userName, password){
        
//     }
// }


// export default ProductsManager