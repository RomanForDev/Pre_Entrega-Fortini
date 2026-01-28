// import crypto from 'crypto'
// import fs from 'fs/promises'
// const path = './data/users.json';

// class UsersManager {
//     constructor(){
//         this.users = []
//     }

//     async createUser(user) {
//         const { name, email, password } = user;
//         const hash = crypto.createHash('sha256');
//         const id = crypto.randomUUID();

//         hash.update(password);
//         let passwordHash = hash.digest('hex');

//         this.users.push({
//             id,
//             name,
//             email,
//             password: passwordHash
//         });
//         const text = JSON.stringify( this.users, null, 2)
//         await fs.writeFile(path, text);
        
//     }

//     async getUsers() {
//         try {        
//             const data = await fs.readFile( path, 'utf-8');
//             this.users = JSON.parse(data);
//             return this.users
//         } catch (error) {
//             console.error(error)
//             return []
//         }

//     }

//     auth(userName, password){
        
//     }
// }

// export default UsersManager