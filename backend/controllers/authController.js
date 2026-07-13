const User = require("../models/User");
const bcrypt = require("bcrypt");


// =====================
// REGISTER USER
// =====================

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



        // Create user

        const user = new User({

            name,

            email,

            password: hashedPassword,

            role: role || "student"

        });



        await user.save();



        res.status(201).json({

            message: "Registration Successful"

        });



    }

    catch(error) {


        res.status(500).json({

            message: error.message

        });


    }

};




// =====================
// LOGIN USER
// =====================

const loginUser = async (req,res)=>{


    try {


        const {

            email,

            role


        } = req.body;



        // Find user by email and role

        const user = await User.findOne({

            email,

            role

        });



        if(!user){


            return res.status(401).json({

                message:"Invalid credentials"

            });


        }



        // Compare encrypted password

        const isMatch = await bcrypt.compare(

            password,

            user.password

        );



        if(!isMatch){


            return res.status(401).json({

                message:"Invalid credentials"

            });


        }



        // Login success

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




module.exports = {

    registerUser,

    loginUser

};
