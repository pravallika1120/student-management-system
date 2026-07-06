import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AddStudent from "../pages/AddStudent";
import StudentList from "../pages/StudentList";
import Profile from "../pages/Profile";
import EditStudent from "../pages/EditStudent";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-student" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;