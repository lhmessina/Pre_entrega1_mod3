import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js"
import { PetService } from "../services/pet.service.js";
import __dirname from "../utils/index.js";

export class PetController{

      constructor (){

      this.petService = new PetService()
                      }

    getAllPets = async (req,res) => {
    const pets = await this.petService.getpets()
    res.send({status:"success",payload:pets})
                       }

    getPetById = async (req, res) => {
        const id = req.params.pid
        console.log("id--->",id)
        const pet = await this.petService.getpetById({_id:id})
        if(!pet) return res.status(404).send({status:"error",error:"Pet not found"})
        res.send({status:"success",payload:pet})
    }
    
    createPet = async (req,res) => {
        const doc = req.body
        console.log("a ver",doc)
        const pets = await this.petService.create(doc)
        return res.status(201).json({status:"success",payload:pets})
        //res.send({status:"success",payload:pets})
                                  }
                    
    // deletePet = async(req,res)=> {
    //       const petId = req.params.pid;
    //       const result = await petsService.delete(petId);
    //       res.send({status:"success",message:"pet deleted"});


    //                          }

    deletePet = async(req,res) =>{
        const petId = req.params.pid;
        
        if (petId == "FFFFFFFFFFFFFFFFFFFFFFFF"){
           this.petService.deleteAllPets()
          res.send({status:"success",message:"TODOS LOS PETS BORRADOS"})
                                                 }
        else{
 
        const result = await this.petService.getpetById(petId);
        if (result ) {
         
             
         const userDel = await this.petService.deleteById(petId)
         res.send({status:"success",message:`se elimio el pet ID ${petId}`})
                     } 
      else {
         res.send({status:"NOK",message:"Pet doesn't exist"})
           }
           }
                                     }
                            
// const createPet = async(req,res)=> {
//     const {name,specie,birthDate} = req.body;
//     if(!name||!specie||!birthDate) return res.status(400).send({status:"error",error:"Incomplete values"})
//     const pet = PetDTO.getPetInputFrom({name,specie,birthDate});
//     const result = await petsService.create(pet);
//     res.send({status:"success",payload:result})
// }

   updatePet = async (req,res) => {
       const petUpdateBody = req.body;
       const petId = req.params.pid;
       const result = await this.petService.modifyPet(petId,petUpdateBody)

    res.send({status:"success",message:result})
}
}

// const deletePet = async(req,res)=> {
//     const petId = req.params.pid;
//     const result = await petsService.delete(petId);
//     res.send({status:"success",message:"pet deleted"});
// }

// const createPetWithImage = async(req,res) =>{
//     const file = req.file;
//     const {name,specie,birthDate} = req.body;
//     if(!name||!specie||!birthDate) return res.status(400).send({status:"error",error:"Incomplete values"})
//     console.log(file);
//     const pet = PetDTO.getPetInputFrom({
//         name,
//         specie,
//         birthDate,
//         image:`${__dirname}/../public/img/${file.filename}`
//     });
//     console.log(pet);
//     const result = await petsService.create(pet);
//     res.send({status:"success",payload:result})
// }
// export default {
//     getAllPets,
//     createPet,
//     updatePet,
//     deletePet,
//     createPetWithImage
// }