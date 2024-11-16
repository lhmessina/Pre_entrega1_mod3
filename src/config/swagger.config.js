import swaggerJSDoc from "swagger-jsdoc";



const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "User interaction with  API for pets  Adoptions",
            version: "1.0.0",
            description: "The user interact with a  crud of pets for adoption "
        }
    },
      apis:["./src/docs/**/*.yaml"]
      //apis:[`${__dirname}/docs/**/*.yaml`]
}

export const specs = swaggerJSDoc(swaggerOptions);