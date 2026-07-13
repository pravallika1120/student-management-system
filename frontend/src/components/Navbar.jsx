import {useEffect,useState} from "react";


function Navbar(){

const [name,setName]=useState("");


useEffect(()=>{

const username =
localStorage.getItem("name");

setName(username);

},[]);



return(

<h4>
Welcome, {name}
</h4>

);

}


export default Navbar;
