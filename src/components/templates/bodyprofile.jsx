import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Container, Col, Table } from 'react-materialize';
import Row from '../organism/row.jsx';
import SVG from 'react-inlinesvg';
import { COLOR, SIZE } from '../../utils/constants.js';
import TitleSect from '../atoms/titlesect.jsx';
import Divider from '../atoms/divider.jsx';
import { LabelSailecMedium, LabelSailecRegular } from '../atoms/label.jsx';

import { getStudentById } from '../../services/studentsService.js';

import PathIcUser from '../../icons/ic_user.svg';


const SVGStyled = styled(SVG)`
    height: 70px;
    fill: ${COLOR.gray};
    display: block;
    margin: auto;
`;

const Subtitle = styled(LabelSailecMedium)`
    font-size: ${SIZE.title};
    color: ${COLOR.secondary};
`;

const Desc = styled(LabelSailecRegular)`
    font-size: ${SIZE.subtitle};
    color: ${COLOR.secondary};
`;

function _calculateAge(birth) {
    var birthDate = new Date(birth);
    var ageDif = Date.now() - birthDate;
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


const BodyProfile = () => {

    const { id } = useParams();

    var [student, setStudent] = useState({
        "id": 3,
        "fname": "Username",
        "mname": "",
        "lname": "",
        "fsurname": "Usersurname",
        "lsurname": "",
        "email": "",
        "sex": "f",
        "birth": "1969-02-22",
        "regdate": "2021-06-29",
        "section": "initial",
        "observation": ""
    });

    useEffect(() => {
        getStudentById(id).then(json => {
            if (json.error) {
                console.log(error);
            } else {
                setStudent(json.data[0]);
                console.log(json.data[0]);
            }
        })
    }, [])

    return(
        <Container>
            <Row margin='80px 0 40px 0'>
                <TitleSect>Details</TitleSect>
            </Row>
            <Row margin='40px 0 80px 0'>
                <Col s={12} m={12} l={9} xl={9}>
                    <ul>
                        <li>
                            <Subtitle>Nombres</Subtitle>
                        </li>
                        <li>
                            <Desc>
                                {student.fname 
                                + (student.mname && student.mname != '' ? ' ' + student.mname : '') 
                                + (student.lname && student.lname != '' ? ' ' + student.lname : '')
                                }
                            </Desc>
                        </li>
                        <li><Divider margin='25px 0'/></li>
                        <li>
                            <Subtitle>Primer apellido</Subtitle>
                        </li>
                        <li>
                            <Desc>
                                { student.fsurname && student.fsurname != '' ? ' ' + student.fsurname : '' }
                            </Desc>
                        </li>
                        <li><Divider margin='25px 0'/></li>
                        <li>
                            <Subtitle>Sergundo apellido</Subtitle>
                        </li>
                        <li>
                            <Desc>
                                { student.lsurname && student.lsurname != '' ? ' ' + student.lsurname : '' }
                            </Desc>
                        </li>
                        <li><Divider margin='25px 0'/></li>
                        <li>
                            <Subtitle>Edad</Subtitle>
                        </li>
                        <li>
                            <Desc>{ _calculateAge(student.birth) }</Desc>
                        </li>
                        <li><Divider margin='25px 0'/></li>
                        <li>
                            <Subtitle>Email</Subtitle>
                        </li>
                        <li>
                            <Desc>{ student.email && student.email != '' ? ' ' + student.email : '' }</Desc>
                        </li>
                        <li><Divider margin='25px 0'/></li>
                        <li>
                            <Subtitle>Sección</Subtitle>
                        </li>
                        <li>
                            <Desc>{ student.section && student.section != '' ? ' ' + student.section : '' }</Desc>
                        </li>
                        <li><Divider margin='25px 0'/></li>
                        <li>
                            <Subtitle>Observaciones</Subtitle>
                        </li>
                        <li>
                            <Desc>{ student.observation && student.observation != '' ? ' ' + student.observation : '' }</Desc>
                        </li>
                    </ul>
                    
                    
                </Col>
                <Col s={12} m={12} l={3} xl={3}>
                    <SVGStyled src={PathIcUser}></SVGStyled>
                </Col>
            </Row>
        </Container>
    )
}

export default BodyProfile;