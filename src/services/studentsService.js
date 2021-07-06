import axios from 'axios';

export const getStudents = () => {
    return axios.get('http://localhost:3000/api/students');
}

export const getStudentById = (id) => {
    return axios.get(`http://localhost:3000/api/students/${id}`);
}

export const createStudent = (student) => {
    return axios.post(`http://localhost:3000/api/students/create`, student);
}
