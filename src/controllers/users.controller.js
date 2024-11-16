//import { usersService } from "../services/index.js"
import { UserService } from "../services/user.service.js";
import { logger } from "../utils/logger.js";
export class UserControllers{
    constructor() {

        this.userService = new UserService()
    }
    
    
    getAllUsers = async (req, res) => {
       
        const users =  await  this.userService.getUser()
        
        res.send({ status: "success", payload: users });
        
       }



    getUser = async(req,res)=> {
       const userId = req.params.uid;
       const user = await this.userService.getuserByid(userId)
       if(!user) return res.status(404).send({status:"error",error:"User not found"})
       res.send({status:"success",payload:user})
}

    createUser = async (req,res) => {
       const newUser = req.body
       //console.log(newUser)
       const  user = await this.userService.create(newUser)
       return res.status(201).json({status:"success",payload:user})
       //res.send({status:"success",payload:user})

    }

    deleteUser = async(req,res) =>{
       const userId = req.params.uid;
       
       if (userId == "FFFFFFFFFFFFFFFFFFFFFFFF"){
        logger.warn("se ejecuto el borrado de todos los usuarios") 
        this.userService.deleteUsers()
         res.send({status:"success",message:"TODOS LOS USERS BORRADOS"})
                                                }
       else{

       const result = await this.userService.getuserByid(userId);
       if (result ) {
        
            
        const userDel = this.userService.deleteUserByid(userId)
        res.send({status:"success",message:`se elimio el user ID ${userId}`})
                    } 
     else {
        res.send({status:"NOK",message:"User doesn't exist"})
          }
          }
                                    }

   updateUser = async(req,res)=>{
    const updateBody = req.body;
   
    const userId = req.params.uid;
    
    const user = await this.userService.getuserByid(userId);
    console.log("USUARIO:",user)
    

    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    //const result = await this.userService.UpdateUserByid(userId,updateBody);
   const result = await this.userService.UpdateUserByid(userId,updateBody);
    res.send({status:"success",message:result})
}




}

    
   

