const User = require("../models/User");


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
            role: role || "student"

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



        if(user.password !== password){

            return res.status(401).json({

                message:"Invalid password"

            });

        }



        res.json({

            message:"Login successful",

            role:user.role,

            email:user.email

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
