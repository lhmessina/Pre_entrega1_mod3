import { expect } from "chai";
import supertest from "supertest";


const request_a = supertest("http://localhost:8080/api/adoptions");
const request_p = supertest("http://localhost:8080/api/pets");
const request_u = supertest("http://localhost:8080/api/users");



describe("Test de router de adoptions", () => {
let user_temp;
let pet_temp;
let adoption_temp;

it("[POST] /api/pets - Debe crear  una  mascota de prueba para ser adoptada", async () => {
  const newPet = {
      "name": "Kato",
      "specie": "dolphin",
      "birthDate": "2023-11-30T18:35:32.344Z",
      "adopted": false,
      "image": "https://avatars.githubusercontent.com/u/94160224"
      };
   const { status, body} = await request_p.post("/").send(newPet);
   pet_temp = body.payload
   expect(status).to.be.equal(201);})

///////////////////////////////////CREO USER DE PRUEBA ///////////////////////////////////////////////////////
it("[POST] /api/users - Debe crear  un usuario de prueba para adoptar", async () => {
   const newUser = {

          "first_name": "Peter4",
          "last_name": "Korhonen",
          "email": "Tita9.Heikkila@gmail.com",
          "password": "123",
          "role": "user",
          "pets": []

                    }
  const { status, body } = await request_u.post("/").send(newUser); 
  user_temp = body.payload
  expect(status).to.be.equal(201);
 
})
   
  
  it("[POST] /api/adoptions/:uid/:pid  - Debe crear una nueva adopcion  ", async () => {
     
      
      // console.log("user_temp_acceso_global",user_temp._id)
      // console.log("pet_temp_acceso_global",pet_temp._id)
      

      
      const  newAdoption = {
        "owner" :user_temp._id,
        "pet" :pet_temp._id

                    }
                 
   
      const {  body } = await request_a.post(`/${user_temp._id}/${pet_temp._id}`).send(newAdoption); 
      
      adoption_temp = body.message._id// lo utilizo para tener un ID de prueba del GET by ID
        
       expect(body.status).to.be.equal('success')
       expect(body.petUpdate.adopted).to.be.equal(true)
      
                                            });
  it ("[GET] /api/adoptions/:aid  - Debe retornar un adopcion basado en su ID ", async () => {
     
     const { status, body } = await request_a.get(`/${adoption_temp}`); 
      expect(body.status).to.be.equal('success')
       expect(body.payload._id).to.be.equal(adoption_temp)
  })

  it ("[GET] /api/adoptions/  - Debe retornar un array con todas las adopciones creadas  ", async () => {
     
    const { status, body } = await request_a.get(`/`); 
     
      expect(body.status).to.be.equal('success')
      expect(body.payload).to.be.an("array")
    })
  
    });