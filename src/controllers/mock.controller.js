import { PetsMock } from "../mocks/pets.mok.js"
import { UsersMock } from "../mocks/user.mock.js"
import { UserService } from "../services/user.service.js"

import {PetService} from "../services/pet.service.js"

const userMock = new UsersMock() 
const petMocks = new PetsMock()

const userService = new UserService
const petService = new PetService

export class MockController  {
       
          
        /////////////

        async generateAmount (req, res) {
           
            const {amountUsers, amountPets} = req.params
            console.log(amountUsers)
            console.log(amountPets)

            const users = []
            const pets =[]
            for (let i= 0; i <+amountUsers; i++ ) {
                
            const user = await userMock.generateUsersMocks(`generando ${amountUsers} usuarios....`)
            users.push(user)
            }
            const usertoDB = userService.createMany(users)
            
            for (let i =0; i<+amountPets;i++){
            const pet = await petMocks.generatePetsMocks(`generando ${amountPets} pets....`)
            pets.push(pet)
            }
            const pettoDB = petService.createMany(pets)
            res.send({status: "OK" , payload: pets,users})
            //res.send({status: "OK" , payload: amountUsers})
       
       
}

        //////////////
        
        async getUsersMock (req, res) {
           
         
             const users = []
             for (let i= 0; i < 50; i++ ) {
             const user = await userMock.generateUsersMocks('"generando usuarios..."')
             users.push(user)
             }
             const usertoDB = userService.createMany(users)
            res.send({status: "OK" , payload:users})
        
        
}
    }
    