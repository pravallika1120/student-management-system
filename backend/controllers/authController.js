const User = require("../models/User");
const bcrypt = require("bcrypt");


// REGISTER

const registerUser = async(req,res)=>{

    try{

        const {
            name,
            email,
            password,
            role
        } = req.body;


        const existingUser = await User.findOne({email});


        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });

        }


        const user = new User({

            name,
            email,
            password,
            role: role 

        });


        await user.save();


        res.status(201).json({

            message:"Registration Successful"

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



// LOGIN
const loginUser = async(req,res)=>{

    try{

        const {
            email,
            password,
            role
        } = req.body;


        const user = await User.findOne({
            email,
            role
        });


        if(!user){

            return res.status(401).json({
                message:"Invalid credentials"
            });

        }


        const isMatch = await bcrypt.compare(
            password,
            user.password
        );


        if(!isMatch){

            return res.status(401).json({
                message:"Invalid credentials"
            });

        }


        res.status(200).json({

            message:"Login successful",

            name:user.name,

            email:user.email,

            role:user.role

        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
module.exports={

    registerUser,
    loginUser

};
