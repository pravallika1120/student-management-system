import {useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api/studentApi";


function Register(){

const navigate = useNavigate();


const [user,setUser] = useState({

name:"",
email:"",
password:"",
role:"student"

});


const handleChange=(e)=>{

setUser({

...user,

[e.target.name]:e.target.value

});

};



const handleSubmit=async(e)=>{

e.preventDefault();


try{

await API.post("/auth/register",user);


alert("Registration Successful");


navigate("/");


}

catch(error){

console.log(error);


alert(

error.response?.data?.message ||

"Registration Failed"

);

}


};



return(

<div className="container mt-5">

<div className="card shadow">


<div className="card-header bg-primary text-white">

<h3>
Student Registration
</h3>

</div>


<div className="card-body">


<form onSubmit={handleSubmit}>


<input

className="form-control mb-3"

name="name"

value={user.name}

placeholder="Enter Name"

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="email"

type="email"

value={user.email}

placeholder="Enter Email"

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="password"

type="password"

value={user.password}

placeholder="Enter Password"

onChange={handleChange}

/>



<select

className="form-control mb-3"

name="role"

value={user.role}

onChange={handleChange}

>


<option value="student">

Student

</option>


</select>



<button className="btn btn-success">

Register

</button>


</form>


</div>


</div>


</div>

);

}


export default Register;
