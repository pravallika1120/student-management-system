const User = require("../models/User");
const bcrypt = require("bcrypt");


// REGISTER

const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;


        const existingUser = await User.findOne({
            email
        });


        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });

        }


        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


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


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};




// LOGIN

const loginUser = async (req, res) => {


    try {


        const {
            email,
            password,
            role
        } = req.body;



        console.log("LOGIN REQUEST:", {
            email,
            role
        });



            const user = await User.findOne({
    email
});

console.log("LOGIN EMAIL:", email);
console.log("LOGIN ROLE FROM FRONTEND:", role);
console.log("USER FROM DATABASE:", user);


        if (!user) {

            return res.status(401).json({

                message: "User not found"

            });

        } 

 if(user.role !== role){

    console.log("ROLE MISMATCH");
    console.log("DATABASE ROLE:", user.role);
    console.log("FRONTEND ROLE:", role);

    return res.status(401).json({
        message:"Role mismatch"
    });

}

            });

        }



        const isMatch = await bcrypt.compare(

            password,

            user.password

        );



        console.log(
            "PASSWORD MATCH:",
            isMatch
        );



        if (!isMatch) {

            return res.status(401).json({

                message: "Invalid password"

            });

        }



        res.status(200).json({

            message: "Login successful",

            name: user.name,

            email: user.email,

            role: user.role

        });



    } catch(error) {


        console.log(error);


        res.status(500).json({

            message: error.message

        });


    }


};




module.exports = {

    registerUser,

    loginUser

};
