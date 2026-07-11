const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// REGISTER USER
router.post("/register", async (req, res) => {

    try {

        const { email, password, role } = req.body;


        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const user = new User({
            email,
            password: hashedPassword,
            role
        });


        await user.save();


        res.json({
            message:"User registered successfully"
        });


    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});





// LOGIN USER
router.post("/login", async (req,res)=>{


    try{

        const {email,password,role}=req.body;


        const user = await User.findOne({
            email,
            role
        });


        if(!user){

            return res.status(400).json({
                message:"Invalid email or role"
            });

        }



        const isMatch = await bcrypt.compare(
            password,
            user.password
        );


        if(!isMatch){

            return res.status(400).json({
                message:"Invalid password"
            });

        }



        const token = jwt.sign(
            {
                id:user._id,
                role:user.role
            },
            process.env.JWT_SECRET || "secretkey",
            {
                expiresIn:"1d"
            }
        );



        res.json({

            message:"Login successful",

            token,

            role:user.role

        });



    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }


});


module.exports = router;