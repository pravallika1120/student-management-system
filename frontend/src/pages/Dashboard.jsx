import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";


function Dashboard() {


  const name = localStorage.getItem("name");



  return (

    <>


      <Navbar />


      <div className="container-fluid">


        <div className="row">



          <div className="col-md-2 p-0">

            <Sidebar />

          </div>




          <div className="col-md-10 p-4">



            <h2>

              Welcome, {name}

            </h2>



            <div className="row mt-4">



              <div className="col-md-3">

                <DashboardCard

                  title="Students"

                  value="250"

                />

              </div>




              <div className="col-md-3">

                <DashboardCard

                  title="Departments"

                  value="6"

                />

              </div>




              <div className="col-md-3">

                <DashboardCard

                  title="Attendance"

                  value="95%"

                />

              </div>




              <div className="col-md-3">

                <DashboardCard

                  title="CGPA"

                  value="8.2"

                />

              </div>



            </div>



          </div>



        </div>


      </div>


    </>

  );


}


export default Dashboard;
