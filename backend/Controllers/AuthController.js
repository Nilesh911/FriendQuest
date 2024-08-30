const UserModel = require("../Models/User");
const bcrypt = require('bcrypt')

const signup = async (req,res) =>{
    try {
        const {name,email,password}=req.body;
        const user = await UserModel.FindOne({email});
        if(user){
            return res.status(409)
            .json({Message:"user is already exit,You can login",success:false})
        } 
        const UserModel=new UserModel({name,email,password});
        UserModel.password= await bcrypt.hash(password,10)
        await UserModel.save();
        res.status(201)
        .json({
            message:"Signup successfully",
            success:true
        })
        
    } catch (error) {
        
        res.status(500)
        .json({
            message:"internal server error",
            success:False
        })
    }
}

module.exports={
    signup  
}