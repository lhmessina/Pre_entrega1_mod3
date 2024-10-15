import Pet from "../dao/Pets.dao.js"
//const pets = new Pet
export class PetService {
    
    constructor(){
        this.pets = new Pet()
    }
     
    
    async getpets () {

       const pets = this.pets.get()
       
       return pets
    }  

    async getpetById (id) {

        const pet = this.pets.getBy({_id:id})    
        return pet
     }  
    async create  (doc) {
        const pet = this.pets.save(doc)  
        return pet;
        }

    
    async createMany  (doc) {
        const pet = this.pets.saveMany(doc)  
        return pet;
        }
 
    async deleteById (pid)  {
            const pet = this.pets.delete(pid)
            return pet
        }
    
        async deleteAllPets (params)  {
        const pet = this.pets.deleteall()
        return pet
    }


}