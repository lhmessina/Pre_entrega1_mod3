import { fakerFI as facker} from "@faker-js/faker"


export class PetsMock{

    /////////////////////////
    Pets = []
        
                
    generatePetsMocks = async (dato) => {
    console.log(dato)
    const pets= {
         
    name: facker.person.firstName(),
    specie:facker.animal.type(),
    birthDate:facker.date.past(),
    adopted: false,
    image:facker.image.avatar(),
                 }
    
    return pets
                                    }
     


    //////////////////



                   }