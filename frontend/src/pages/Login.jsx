import { useState } from "react";
import API from "../api/api";
import "../styles/Login.css";

function Login() {

  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // This function must be inside Login()
  const handleLogin = async () => {

    try {

      const response = await API.post("/auth/login", {
        email,
        password,
        role
      });


      localStorage.setItem(
        "token",
        response.data.token
      );


      alert("Login Successful");


    } catch(error) {

      console.log(error);

      alert(
        error.response?.data?.message || 
        "Login Failed"
      );

    }

  };


  return (

    <div className="login-container">

      <div className="login-card">

        <h2>🎓 Student Management System</h2>

        <p>Login to continue</p>


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


        <div>

          <label>
            <input
              type="radio"
              checked={role==="admin"}
              onChange={()=>setRole("admin")}
            />
            Admin
          </label>


          <label>
            <input
              type="radio"
              checked={role==="student"}
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


      </div>

    </div>

  );

}


export default Login;