import axios from "axios";

const API = axios.create({

    baseURL:
    "https://student-management-backend.onrender.com"

});

export default API;
