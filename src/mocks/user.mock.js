
import { fakerFI as facker } from "@faker-js/faker";

import { createHash } from "../utils/index.js";


export class UsersMock {
      
        users = []
        
                
        generateUsersMocks = async (dato) => {
        console.log(dato)
        const user = {
             
        first_name: facker.person.firstName(),
        
        last_name:facker.person.lastName(),
        email:facker.internet.email(),
        password: await createHash("Coder123"),
        role: facker.datatype.boolean() ? "user" : "admin",
        pets:[]
                     }
        
        return user
                                        }
         
                     }
        


