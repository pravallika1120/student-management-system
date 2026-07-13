import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Navbar(){

    const [name,setName] = useState("");
    const [showProfile,setShowProfile] = useState(false);

    const navigate = useNavigate();


    useEffect(()=>{

        const username = localStorage.getItem("name");

        setName(username);

    },[]);



    const logout = () => {

        localStorage.clear();

        navigate("/");

    };


    return(

        <nav className="navbar navbar-light bg-light px-4 shadow">

            <h4>
                Welcome, {name}
            </h4>


            <div className="position-relative">


                <button
                    className="btn btn-outline-primary"
                    onClick={()=>setShowProfile(!showProfile)}
                >
                    👤 Profile
                </button>



                {
                    showProfile && (

                        <div 
                        className="card position-absolute p-3"
                        style={{
                            right:0,
                            width:"220px",
                            zIndex:1000
                        }}
                        >

                            <h5>
                                {localStorage.getItem("name")}
                            </h5>


                            <p>
                                Email:
                                <br/>
                                {localStorage.getItem("email")}
                            </p>


                            <p>
                                Role:
                                <br/>
                                {localStorage.getItem("role")}
                            </p>


                            <button
                            className="btn btn-danger"
                            onClick={logout}
                            >
                                Logout
                            </button>


                        </div>

                    )
                }


            </div>


        </nav>

    );

}


export default Navbar;
