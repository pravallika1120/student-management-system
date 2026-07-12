# 🎓 Student Management System

A full-stack web application developed to manage student information efficiently.  
The system provides authentication, dashboard view, student CRUD operations, and profile management.

---

# 📌 Project Overview

The Student Management System is designed to simplify student record management.

The application allows administrators to:

- Login into the system
- View dashboard statistics
- Add new student details
- View student records
- Update student information
- Delete student records
- View user profile

The project follows a client-server architecture using React.js for frontend and Node.js with Express.js for backend.

---

# 🚀 Features

## 🔐 Authentication Module

- User login system
- Role selection (Admin / Student)
- JWT based authentication
- Secure API communication


## 📊 Dashboard Module

Displays:

- Total students
- Departments
- Attendance
- CGPA


## 👨‍🎓 Student Management Module

Admin can:

- Add student details
- View student list
- Edit student information
- Delete student records


## 👤 Profile Module

Displays:

- User email
- User role
- Account status


---

# 🛠️ Technologies Used


## Frontend

- React.js
- Vite
- Axios
- React Router DOM
- Bootstrap


## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication


## Deployment

- AWS EC2
- Docker
- Nginx


---

# 📂 Project Structure


```
student-management-system

│
├── backend
│
│── config
│    └── db.js
│
│── controllers
│    └── studentController.js
│
│── models
│    └── Student.js
│
│── routes
│    ├── studentRoutes.js
│    └── authRoutes.js
│
│── server.js
│
│
├── frontend
│
│── src
│
│   ├── api
│   │    └── studentApi.js
│   │
│   ├── components
│   │    ├── Navbar.jsx
│   │    ├── Sidebar.jsx
│   │    └── DashboardCard.jsx
│   │
│   ├── pages
│   │    ├── Login.jsx
│   │    ├── Dashboard.jsx
│   │    ├── StudentList.jsx
│   │    ├── AddStudent.jsx
│   │    ├── EditStudent.jsx
│   │    └── Profile.jsx
│   │
│   └── App.jsx
│
└── docker-compose.yml

```

---

# 🔄 Application Workflow


```
User
 |
 |
React Frontend
 |
 |
Axios API Request
 |
 |
Express Backend
 |
 |
MongoDB Database

```


---

# 🔗 API Endpoints


| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/login | User Login |
| GET | /students | Get all students |
| POST | /students | Add student |
| GET | /students/:id | Get student details |
| PUT | /students/:id | Update student |
| DELETE | /students/:id | Delete student |


---

# 🗄️ Database Schema


Student Collection:


```json
{
 "studentId":"1001",
 "name":"Pravallika",
 "email":"pravallika@gmail.com",
 "phone":"7859388359",
 "department":"CSIT",
 "year":3,
 "cgpa":9
}

```


---

# 🐳 Docker Implementation


Frontend runs inside Docker container:

```
React Application
Port: 5173
```


Backend runs inside Docker container:

```
Node Express Server
Port: 5000
```


Run project:


```
docker compose up --build

```


---

# ☁️ Deployment

The project was deployed on AWS EC2 instance.

Deployment steps:

1. Created EC2 instance
2. Installed Docker
3. Containerized frontend and backend
4. Configured Nginx reverse proxy
5. Accessed application through EC2 public IP


---

# 📸 Application Screenshots


## Login Page

User authentication page.


## Dashboard

Displays system overview.


## Student List

Shows all student records.


## Add Student

Allows admin to add new students.


## Profile

Displays user information.


---

# 🎯 Advantages

- Easy student record management
- Reduces manual work
- Centralized database storage
- User-friendly interface
- Fast data access


---

# 🔮 Future Enhancements

- Attendance management
- Marks management
- Search and filtering
- Email notifications
- Advanced analytics dashboard


---

# 👩‍💻 Developed By

**Gangi Satyanarayana,
Pravallika Uppalapati, 
Sai Prasanna Kampi,
Haripriya Uppicherla,
Mohan Aakula**

B.Tech 

---

# 📌 Conclusion

The Student Management System provides an efficient solution for managing student information digitally.  
It demonstrates full-stack development using modern web technologies with cloud deployment.
