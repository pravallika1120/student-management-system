import { useState } from "react";
import "../styles/Login.css";
function Login() {
  const [role, setRole] = useState("admin");

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>🎓 Student Management System</h2>

        <p>Login to continue</p>

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
        />

        <div className="mb-3">

          <label className="me-3">
            <input
              type="radio"
              checked={role === "admin"}
              onChange={() => setRole("admin")}
            />
            {" "}Admin
          </label>

          <label>
            <input
              type="radio"
              checked={role === "student"}
              onChange={() => setRole("student")}
            />
            {" "}Student
          </label>

        </div>

        <button className="btn btn-primary w-100">
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;