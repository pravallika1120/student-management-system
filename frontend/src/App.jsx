import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Register from "./pages/Register";


function App(){

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Login />} 
        />

        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          path="/students" 
          element={<StudentList />} 
        />

        <Route
          path="/add-student"
          element={<AddStudent />}
        />

        <Route
          path="/edit-student/:id"
          element={<EditStudent />}
        />
        <Route
         path="/register"
         element={<Register/>}
        />
      </Routes>

    </BrowserRouter>

  );

}


export default App;
