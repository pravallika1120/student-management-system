const User = require("../models/User");
const bcrypt = require("bcrypt");


// ==========================
// REGISTER USER
// ==========================

const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;



        // Check existing user

        const existingUser = await User.findOne({
            email
        });


        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }



        // Encrypt password

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );



        // Create new user

        const user = new User({

            name,

            email,

            password: hashedPassword,

            role: role ? role.toLowerCase() : "student"

        });



        await user.save();



        res.status(201).json({

            message: "Registration Successful"

        });



    }

    catch(error) {


        res.status(500).json({

            message:error.message

        });


    }


};





// ==========================
// LOGIN USER
// ==========================


const loginUser = async(req,res)=>{


    try {


        const {

            email,

            password,

            role

        } = req.body;



        console.log(
            "LOGIN EMAIL:",
            email
        );


        console.log(
            "LOGIN ROLE FROM FRONTEND:",
            role
        );



        // Find user

        const user = await User.findOne({
            email
        });



        console.log(
            "USER FROM DATABASE:",
            user
        );



        if(!user){


            return res.status(401).json({

                message:"Invalid credentials"

            });


        }



        // Compare role

        if(
            user.role.toLowerCase()
            !==
            role.toLowerCase()
        ){


            return res.status(401).json({

                message:"Role mismatch"

            });


        }

        console.log("ENTERED PASSWORD:", password);
        console.log("DATABASE HASH:", user.password);


        // Compare password

        // Compare password

const isMatch = password === user.password;


if(!isMatch){

    return res.status(401).json({

        message:"Invalid password"

    });

}

        
    console.log("PASSWORD RESULT:", isMatch);

        console.log(
            "PASSWORD MATCH:",
            isMatch
        );

        // Successful login

        res.status(200).json({


            message:"Login successful",


            name:user.name,


            email:user.email,


            role:user.role



        });



    }

    catch(error){


        console.log(error);


        res.status(500).json({

            message:error.message

        });


    }


};





module.exports = {

    registerUser,

    loginUser

};
