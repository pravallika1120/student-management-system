import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/studentApi";
import "../styles/Login.css";


function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {

    try {

      const response = await API.post("/auth/login", {
        email,
        password,
        role
      });


      console.log("LOGIN RESPONSE:", response.data);


      // Store token
      localStorage.setItem(
        "token",
        response.data.token
      );


      // Store role
      localStorage.setItem(
        "role",
        response.data.role
      );


      alert("Login Successful");


      // Redirect based on role

      if(response.data.role === "admin") {

        navigate("/dashboard");

      } 
      else {

        navigate("/students");

      }


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

            {" "}Admin


          </label>




          <label>


            <input

              type="radio"

              checked={role === "student"}

              onChange={()=>setRole("student")}

            />

            {" "}Student


          </label>



        </div>





        <button

          className="btn btn-primary w-100"

          onClick={handleLogin}

        >

          Login

        </button>



      </div>



    </div>

  );

}


export default Login;