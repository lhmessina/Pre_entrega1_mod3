import { request,response } from "express";
import {UserService}from "../services/user.service.js"
const cont_user = new UserService() 

 ///
 export class checkUser {
    // constructor(){
    //     this.cont_user = new UserService() 
    // }
 
    VerificaUser  =  async (req = request, res = response ,next) => {
    
    
    const {email} = req.body
    
    
    console.log('email:',email)
    console.log("andentro del middle")
    const userEmail = await cont_user.getuserByemail(email)
    if (userEmail )
        res.send({status:"NOK",payload:"esiste"})
   
    else
        
    
    next()
} }
