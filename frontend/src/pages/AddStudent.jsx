import { useState } from "react";
import API from "../api/studentApi";
function AddStudent() {
  const [student, setStudent] = useState({
    studentId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    cgpa: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 try {

    await API.post("/students", student);

    alert("Student Added Successfully!");

} catch (error) {

    console.error(error);

    alert("Error Adding Student");

}
  };

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>Add Student</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>Student ID</label>

                <input
                  type="text"
                  name="studentId"
                  className="form-control"
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Phone</label>

                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Department</label>

                <input
                  type="text"
                  name="department"
                  className="form-control"
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Year</label>

                <select
                  name="year"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label>CGPA</label>

                <input
                  type="number"
                  name="cgpa"
                  className="form-control"
                  onChange={handleChange}
                />

              </div>

            </div>

            <button className="btn btn-success">
              Save Student
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddStudent;