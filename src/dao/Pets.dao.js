import petModel from "./models/Pet.js";
import userModel from "./models/User.js";
export default class Pet {

    get = (params) =>{
        return petModel.find(params)
    }

    getBy = (params) =>{
        return petModel.findOne(params)
    }

    save = (doc) =>{
        return petModel.create(doc);
    }
    saveMany = (doc) =>{
        return petModel.insertMany(doc);
    }

    update = (id,doc) =>{
        return petModel.findByIdAndUpdate(id,{$set:doc},{ new: true })
    }

    delete = (id) =>{
        return petModel.findByIdAndDelete(id);
    }

    deleteall = () =>{
        
        return petModel.deleteMany();
    }
}