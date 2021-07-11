import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Container, Col, Modal } from 'react-materialize';
import Row from '../organism/row.jsx';
import CollectionItem from '../molecules/collectionitem.jsx';
import SVG from 'react-inlinesvg';
import { COLOR, SIZE } from '../../utils/constants.js';
import TextInput from '../atoms/textinput.jsx';
import TitleSect from '../atoms/titlesect.jsx';
import Button from '../atoms/button.jsx';
import Divider from '../atoms/divider.jsx';
import { calculateAge } from '../../utils/dates.js';

import { getStudentById } from '../../services/studentsService.js';

import PathIcUser from '../../icons/ic_user.svg';
import PathIcEdit from '../../icons/ic_edit.svg';


const SVGStyled = styled(SVG)`
    height: 70px;
    fill: ${COLOR.gray};
    display: block;
    margin: auto;
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

    const [modalNames, setModalNames] = useState();

    useEffect(() => {
        $(window).on('load', function(){
            // ready method is deprecated
            var auxModalNames = M.Modal.getInstance($('#modalNames')); // Init modal
            setModalNames(auxModalNames);
        });

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
                    <CollectionItem
                        header='Nombres'
                        value={
                            student.fname 
                                    + (student.mname && student.mname != '' ? ' ' + student.mname : '') 
                                    + (student.lname && student.lname != '' ? ' ' + student.lname : '')
                        }
                        ic_path={ PathIcEdit }
                        onIcTapped={ () => { modalNames.open() } }/>

                    {/* ****** MODAL NAMES ****** */}
                    <Modal
                        id="modalNames"
                        header="Names"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalNames.close() } }>
                                Close
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='fname' 
                                    name='fname'
                                    type='text' 
                                    placeholder='Primer nombre' 
                                    value={student.fname}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                        <Row margin='10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='mname' 
                                    type='text' 
                                    placeholder='Segundo nombre'
                                    value={student.mname && student.mname != '' ? ' ' + student.mname : ''}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                        <Row margin='10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='lname' 
                                    type='text' 
                                    placeholder='Tercer nombre'
                                    value={student.lname && student.lname != '' ? ' ' + student.lname : ''}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                    </Modal>
                    <Divider margin='15px 0 30px 0'/>
                    <CollectionItem
                        header='Primer apellido'
                        value={ student.fsurname && student.fsurname != '' ? student.fsurname : '--' }
                        ic_path={ PathIcEdit }/>
                    <Divider margin='15px 0 30px 0'/>
                    <CollectionItem
                        header='Segundo apellido'
                        value={ student.lsurname && student.lsurname != '' ? student.lsurname : '--' }
                        ic_path={ PathIcEdit }/>
                    <Divider margin='15px 0 30px 0'/>
                    <CollectionItem
                        header='Edad'
                        value={ calculateAge(student.birth).toString() }/>
                    <Divider margin='15px 0 30px 0'/>
                    <CollectionItem
                        header='Email'
                        value={ student.email && student.email != '' ? student.email : '--' }
                        ic_path={ PathIcEdit }/>
                    <Divider margin='15px 0 30px 0'/>
                    <CollectionItem
                        header='Sección'
                        value={ student.section && student.section != '' ? student.section : '--' }
                        ic_path={ PathIcEdit }/>
                    <Divider margin='15px 0 30px 0'/>
                    <CollectionItem
                        header='Observaciones'
                        value={ student.observation && student.observation != '' ? student.observation : '--' }
                        ic_path={ PathIcEdit }/>
                    
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