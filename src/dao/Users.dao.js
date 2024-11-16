import userModel from "./models/User.js";


export default class Users {
    
    get = (params) =>{
        
        const test = userModel.find(params)
        // console.log("tttt",test)
        // return userModel.find(params);
        return ("tttt",test)
    }

    getBy = (params) =>{
        return userModel.findOne(params)
    }

    save = (doc) =>{
        return userModel.create(doc);
    }
    saveMany = (doc) =>{
        return userModel.insertMany(doc);
    }
    
    update = (id,doc) =>{
        return userModel.findByIdAndUpdate(id,{$set:doc}, { new: true })
    }

    delete = (id) =>{
        console.log("dentro del delete" ,id)
        //return userModel.findByIdAndDelete(id);
        return userModel.findOneAndRemove(id);

    }

    deleteall = () =>{
        console.log("dentro del delete" )
        //return userModel.findByIdAndDelete(id);
        return userModel.deleteMany();
    }
}