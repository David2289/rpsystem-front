import axios from 'axios';

export const getStudents = () => {
    return axios.get('http://localhost:3000/api/students');
}
