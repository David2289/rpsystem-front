import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Col, Table } from 'react-materialize';
import Row from '../organism/row.jsx';

import { getStudentById } from '../../services/studentsService.js';

const BodyProfile = () => {

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        getStudentById(id).then(json => {
            console.log(id);
            if (json.error) {
                console.log(error);
            } else {
                // setStudents(json.data);
                console.log(json.data);
            }
        })
    }, [])

    return(
        <div></div>
    )
}

export default BodyProfile;