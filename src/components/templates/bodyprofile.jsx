import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Container, Col, Table } from 'react-materialize';
import Row from '../organism/row.jsx';
import SVG from 'react-inlinesvg';
import { COLOR, SIZE } from '../../utils/constants.js';
import TitleSect from '../atoms/titlesect.jsx';
import Button from '../atoms/button.jsx';
import TextButton from '../atoms/textbutton.jsx';
import { LabelSailecMedium, LabelSailecRegular } from '../atoms/label.jsx';
import { calculateAge } from '../../utils/dates.js';

import { getStudentById } from '../../services/studentsService.js';

import PathIcUser from '../../icons/ic_user.svg';
import PathIcEdit from '../../icons/ic_edit.svg'


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
                <Col s={12} m={12} l={3} xl={3}>
                    <SVGStyled src={PathIcUser}></SVGStyled>
                </Col>
                <Col s={12} m={12} l={9} xl={9}>
                    <Table>
                        <tbody>
                            <tr>
                            <td>
                                <Subtitle>Nombres</Subtitle>
                                <Desc>
                                    {student.fname 
                                    + (student.mname && student.mname != '' ? ' ' + student.mname : '') 
                                    + (student.lname && student.lname != '' ? ' ' + student.lname : '')
                                    }
                                </Desc>
                            </td>
                            <td>
                                <TextButton ic_path={PathIcEdit} float='right' />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <Subtitle>Primer apellido</Subtitle>
                                <Desc>
                                    { student.fsurname && student.fsurname != '' ? ' ' + student.fsurname : '' }
                                </Desc>
                            </td>
                            <td>
                                <TextButton ic_path={PathIcEdit} float='right' />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <Subtitle>Segundo apellido</Subtitle>
                                <Desc>
                                    { student.lsurname && student.lsurname != '' ? ' ' + student.lsurname : '' }
                                </Desc>
                            </td>
                            <td>
                                <TextButton ic_path={PathIcEdit} float='right' />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <Subtitle>Edad</Subtitle>
                                <Desc>{ calculateAge(student.birth) }</Desc>
                            </td>
                            <td>
                                <TextButton ic_path={PathIcEdit} float='right' />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <Subtitle>Email</Subtitle>
                                <Desc>{ student.email && student.email != '' ? ' ' + student.email : '' }</Desc>
                            </td>
                            <td>
                                <TextButton ic_path={PathIcEdit} float='right' />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <Subtitle>Sección</Subtitle>
                                <Desc>{ student.section && student.section != '' ? ' ' + student.section : '' }</Desc>
                            </td>
                            <td>
                                <TextButton ic_path={PathIcEdit} float='right' />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <Subtitle>Observaciones</Subtitle>
                                <Desc>{ student.observation && student.observation != '' ? ' ' + student.observation : '' }</Desc>
                            </td>
                            <td>
                                <TextButton ic_path={PathIcEdit} float='right' />
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                    
                </Col>
            </Row>

            <Row margin='80px auto'>
                <Col s={6}>
                    <Button 
                        float='right'
                        bg_color={COLOR.white}
                        border_color={COLOR.grayDark}
                        border_width='1px'
                        text_color={COLOR.black}>
                        Update
                    </Button>
                </Col>
                <Col s={6}>
                    <Button 
                        float='left'
                        bg_color={COLOR.white}
                        border_color={COLOR.grayDark}
                        border_width='1px'
                        text_color={COLOR.black}>
                        Remove
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default BodyProfile;