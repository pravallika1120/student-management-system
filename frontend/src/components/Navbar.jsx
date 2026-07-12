function Navbar(){

const name = localStorage.getItem("name");
const role = localStorage.getItem("role");


return(

<nav className="navbar navbar-primary bg-primary text-white p-3">

<h3>
🎓 Student Management System
</h3>


<h4>
Welcome, {role === "admin" ? "Admin" : name}
</h4>


</nav>

);

}


export default Navbar;
