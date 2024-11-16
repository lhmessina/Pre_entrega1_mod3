import { adoptionsService, petsService, usersService } from "../services/index.js"
import { AdoptionService } from "../services/adoption.service.js";

////////////////////////////////////////
export class AdoptionController{
    

    
    constructor (){

        this.adoptions = new AdoptionService()
    
    }
    getadoption = async(req,res)=>{
        const result =  await this.adoptions.getadoptions()
        console.log(result)
        res.send({status:"success",payload:result})
    }
    getAdoptionById = async(req,res)=>{
    const adoptionId = req.params.aid;
    const adoption = await adoptionsService.getBy({_id:adoptionId})
    if(!adoption) return res.status(404).send({status:"error",error:"Adoption not found"})
    res.send({status:"success",payload:adoption})
    } 

    createAdoption = async(req,res)=>{

    const {uid,pid} = req.params;

    const user = await usersService.getUserById(uid);
    if(!user) return res.status(404).send({status:"error", error:"user Not found"});
    const pet = await petsService.getBy({_id:pid});
    if(!pet) return res.status(404).send({status:"error",error:"Pet not found"});
    if(pet.adopted) return res.status(400).send({status:"error",error:"Pet is already adopted"});
    user.pets.push(pet._id);
    await usersService.update(user._id,{pets:user.pets})
    const petUpdate = await petsService.update(pet._id,{adopted:true,owner:user._id})

    const newado = await adoptionsService.create({owner:user._id,pet:pet._id})
    console.log(newado)
    res.send({status:"success",message:newado,petUpdate})
}

    deleteAdoption = async (req,res) => {

        
        const adoptionId = req.params.aid
        console.log(adoptionId)
        if (adoptionId == "FFFFFFFFFFFFFFFFFFFFFFFF"){
           this.adoptions.deleteAlladoptions()
          res.send({status:"success",message:"ALL ADOPTIONS WERE DELETED!!"})
                                                 }
        else{
 
        const result = await this.adoptions.getadoptionById(adoptionId);
        if (result ) {
         
             
         const adoptionDel = await this.adoptions.deleteadoptionById(adoptionId)
         res.send({status:"success",message:`se elimio la adopcion ID ${adoptionId}`})
                     } 
      else {
         res.send({status:"NOK",message:"Adoption doesn't exist"})
           }
           }
                                     }
   }





