import Adoption from "../dao/Adoption.js";


export class AdoptionService{

    constructor (){

    this.adoptions= new Adoption()
                    }


                    async getadoptions () {

                        const adoptions = this.adoptions.get()
                        
                        return adoptions
                     }  
                 
                     async getadoptionById (id) {
                 
                         const adoption = this.adoptions.getBy({_id:id})    
                         return adoption
                      }  
                     async create  (doc) {
                         console.log("doc",doc)
                         const adoption = this.adoptions.save(doc)  
                         return adoption;
                         }
                 

                }