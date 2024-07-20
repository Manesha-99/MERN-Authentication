import { userModel } from "../models/UserModel.js"

export const get_users = async(req,res)=>{
    try{
    const getusers = await userModel.find({});
    return res.status(200).json(getusers);
    }catch(error){
        res.status(500).send({message: error})
    }
}