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

export const updateStudent = (id, student) => {
    return axios.post(`http://localhost:3000/api/students/update/${id}`, student);
}

export const updateStudentPhoto = (id, data) => {
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    };
    return axios.post(`http://localhost:3000/api/students/update/${id}/photo`, data, config);
}

export const removeStudent = (id) => {
    return axios.delete(`http://localhost:3000/api/students/remove/${id}`);
}
