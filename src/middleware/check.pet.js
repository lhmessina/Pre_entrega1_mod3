import { request,response } from "express";
import { PetService } from "../services/pet.service.js";
import { logger } from "../utils/logger.js";


const cont_pet = new PetService() 

 ///
 export class checkPet {
    // constructor(){
    //     this.cont_user = new UserService() 
    // }
 
    VerificaPet =  async (req = request, res = response ,next) => {
    
    
    const {pid} = req.params
    
    
    // console.log('email:',email)
    // console.log("andentro del middle")
    const pet = await cont_pet.getpetById(pid)
    if (pet == undefined ){
        try{
        logger.info(`Intento de modificacion de pet q no esiste : ${pid}`)
        res.send({status:"NOK",payload:"pet no esiste"})
    return logger.error("error") 
    }
           
        catch{
            
        }  }  
    else
        
    logger.info(`Se modifico el pet  ${pid}`)
    next(
        
    )
} }
