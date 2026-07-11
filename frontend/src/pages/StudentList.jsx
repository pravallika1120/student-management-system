import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/studentApi";
function Students(){

return (

<div>

<h1>Student Information</h1>

<p>Welcome to Student Management System</p>

</div>

);

}

function StudentList() {

  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await API.get("/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const editStudent = (id) => {
    navigate(`/edit-student/${id}`);
  };

 const deleteStudent = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {

        await API.delete(`/students/${id}`);

        setStudents(
            students.filter((student) => student._id !== id)
        );

        alert("Student Deleted Successfully");

    } catch (error) {

        console.error(error);

        alert("Error deleting student");

    }
};
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3>Student List</h3>
        </div>

        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>CGPA</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{student.studentId}</td>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>{student.cgpa}</td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => editStudent(student._id)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteStudent(student._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentList;