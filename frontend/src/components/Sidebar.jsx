import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100">

      <h4>Menu</h4>

      <ul className="nav flex-column">


        <li className="nav-item">
          <Link 
            to="/dashboard" 
            className="nav-link text-white"
          >
            Dashboard
          </Link>
        </li>


        <li className="nav-item">
          <Link 
            to="/students" 
            className="nav-link text-white"
          >
            Students
          </Link>
        </li>


        <li className="nav-item">
          <Link 
            to="/add-student" 
            className="nav-link text-white"
          >
            Add Student
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;
