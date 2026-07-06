function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100">
      <h4>Menu</h4>

      <ul className="nav flex-column">

        <li className="nav-item">
          <a href="/dashboard" className="nav-link text-white">
            Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="/students" className="nav-link text-white">
            Students
          </a>
        </li>

        <li className="nav-item">
          <a href="/add-student" className="nav-link text-white">
            Add Student
          </a>
        </li>

        <li className="nav-item">
          <a href="/profile" className="nav-link text-white">
            Profile
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;