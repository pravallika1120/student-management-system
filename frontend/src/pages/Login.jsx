import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import API from "../api/studentApi";
import "../styles/Login.css";


function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    console.log("LOGIN BUTTON CLICKED:", { email, password, role });

    try {

      const response = await API.post("/auth/login", {
        email,
        password,
        role
      });

      console.log("API RESPONSE:", response.data);     

      // Store token
      localStorage.setItem(
        "token",
        response.data.token
      );

        // Store user details
        
        localStorage.setItem(
          "role",
          response.data.user.role
        );
        
        
        localStorage.setItem(
          "name",
          response.data.user.name
        );
        
        
        localStorage.setItem(
          "email",
          response.data.user.email
        );
     

      alert("Login Successful");

      navigate("/dashboard");

    } catch(error) {


      console.log(
        "LOGIN ERROR:",
        error.response
      );


      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }

  };



  return (

    <div className="login-container">


      <div className="login-card">


        <h2>
          🎓 Student Management System
        </h2>


        <p>
          Login to continue
        </p>



        <input

          type="email"

          placeholder="Enter Email"

          className="form-control mb-3"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />



        <input

          type="password"

          placeholder="Enter Password"

          className="form-control mb-3"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

        />




        <div className="mb-3">


          <label className="me-3">


            <input

              type="radio"

              checked={role === "admin"}

              onChange={()=>setRole("admin")}

            />
            
            Admin


          </label>




          <label>


            <input

              type="radio"

              checked={role === "student"}

              onChange={()=>setRole("student")}

            />

            Student


          </label>



        </div>





        <button

          className="btn btn-primary w-100"

          onClick={handleLogin}

        >

          Login

        </button>

        <p className="mt-3">

          New Student?

          <Link to="/register">

           Register Here

          </Link>

        </p>

      </div>



    </div>

  );

}


export default Login;
