import React, { useEffect, useState } from 'react';
import { Container, Col, Table } from 'react-materialize';
import styled from 'styled-components';
import { COLOR, SIZE, SCREEN_MEDIA } from '../../utils/constants.js';
import Row from '../organism/row.jsx';
import Button from '../atoms/button.jsx';
import Divider from '../atoms/divider.jsx';
import TitleSect from '../atoms/titlesect.jsx';
import TextButton from '../atoms/textbutton.jsx'

import { getStudents, fetchStudents } from '../../services/studentsService.js';

import PathIcForward from '../../icons/ic_forward.svg';



const BodyIndex = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then(json => {
            if (json.error) {
                console.log(error);
            } else {
                setStudents(json.data);
                console.log(json.data);
            }
        })
    }, [])

    return (
        <Container>
            <Row>
                <Table>
                    <thead>
                        <tr>
                        <th>Names</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Section</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.map((student, index) => (
                            <tr key={index}>
                            <td>{student.fname + student.mname}</td>
                            <td>{student.fsurname + ' ' + student.lsurname}</td>
                            <td>{student.age}</td>
                            <td>{student.section}</td>
                            <td>
                                <TextButton
                                    href={`/${student.id}`}
                                    ic_path={PathIcForward}
                                    ic_size='15px'
                                    ic_align='right'
                                    separation='5px'
                                    float='right'>
                                    See
                                </TextButton>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default BodyIndex;