import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/studentApi";

function EditStudent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    studentId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    cgpa: ""
  });

  // Fetch student data when page loads
  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await API.get(`/students/${id}`);
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching student:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // Update student
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.put(`/students/${id}`, student);

      alert("Student Updated Successfully!");

      navigate("/students");

    } catch (error) {

      console.error("Error updating student:", error);

      alert("Failed to update student!");

    }
  };

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-warning text-dark">

          <h3>Edit Student</h3>

        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>Student ID</label>

                <input
                  type="text"
                  name="studentId"
                  value={student.studentId}
                  onChange={handleChange}
                  className="form-control"
                  readOnly
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Phone</label>

                <input
                  type="text"
                  name="phone"
                  value={student.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Department</label>

                <input
                  type="text"
                  name="department"
                  value={student.department}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Year</label>

                <select
                  name="year"
                  value={student.year}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select Year</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label>CGPA</label>

                <input
                  type="number"
                  step="0.1"
                  name="cgpa"
                  value={student.cgpa}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

            </div>

            <button type="submit" className="btn btn-warning">
              Update Student
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditStudent;