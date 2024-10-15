
import Users from "../dao/Users.dao.js";


export class UserService  {
// voy a instanciar dao para que tenga los metodos del model
    constructor () {
        this.user = new Users()
        
    }

    async getUser () {
        
     const usuarios = this.user.get()
     return usuarios
     
    }

   async  getuserByid (id) {
    
    const usuarios = this.user.getBy({_id:id})    
    return usuarios
    }

   
    async  getuserByemail (user_email) {
        console.log("_id:",user_email)
        const usuarios = this.user.getBy({email:user_email})    
        return usuarios
        }

    
    
    async create  (doc) {
        const user = this.user.save(doc)  
        return user;
        }

    
    async createMany  (doc) {
        const user = this.user.saveMany(doc)  
        return user;
        }

    

    async  deleteUserByid  (id)  {
         const user = this.user.delete(id)
      
        return user
    }
    /////////////
    async  deleteUsers  ()  {
        const user = this.user.deleteall()
     
       return user
   }


    /////////////


    async  UpdateUserByid  (id,dato)  {
       
        const userMod = this.user.update(id,dato) 
       
       return userMod
   }



}