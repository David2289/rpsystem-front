import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Container, Col, Modal, Select } from 'react-materialize';
import Row from '../organism/row.jsx';
import CollectionItem from '../molecules/collectionitem.jsx';
import SVG from 'react-inlinesvg';
import { COLOR, SIZE } from '../../utils/constants.js';
import TextInput from '../atoms/textinput.jsx';
import TextArea from '../atoms/textarea.jsx';
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

const sexCharToName = (char) => {
    if (char == 'm') {
        return 'Masculino';
    } 
    else if (char == 'f') {
        return 'Femenino';
    }
    else {
        return '';
    }
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

    const [modalNames, setModalNames] = useState();
    const [modalSurnames, setModalSurnames] = useState();
    const [modalEmail, setModalEmail] = useState();
    const [modalSection, setModalSection] = useState();
    const [modalSex, setModalSex] = useState();
    const [modalObservation, setModalObservation] = useState();

    useEffect(() => {
        $(window).on('load', function(){
            // ready method is deprecated
            var auxModalNames = M.Modal.getInstance($('#modalNames'));
            var auxModalSurnames = M.Modal.getInstance($('#modalSurnames'));
            var auxModalEmail = M.Modal.getInstance($('#modalEmail'));
            var auxModalSection = M.Modal.getInstance($('#modalSection'));
            var auxModalSex = M.Modal.getInstance($('#modalSex'));
            var auxModalObservation = M.Modal.getInstance($('#modalObservation'));
            setModalNames(auxModalNames);
            setModalSurnames(auxModalSurnames);
            setModalEmail(auxModalEmail);
            setModalSection(auxModalSection);
            setModalSex(auxModalSex);
            setModalObservation(auxModalObservation);
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
                                    id='inputFname' 
                                    type='text' 
                                    placeholder='Primer nombre' 
                                    value={student.fname}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                        <Row margin='10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputMname' 
                                    type='text' 
                                    placeholder='Segundo nombre'
                                    value={student.mname && student.mname != '' ? ' ' + student.mname : ''}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                        <Row margin='10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputLname' 
                                    type='text' 
                                    placeholder='Tercer nombre'
                                    value={student.lname && student.lname != '' ? ' ' + student.lname : ''}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                    </Modal>

                    <Divider margin='15px 0 30px 0'/>

                    <CollectionItem
                        header='Surnames'
                        value={ (student.fsurname && student.fsurname != '' ? student.fsurname : '')
                                + (student.lsurname && student.lsurname != '' ? student.lsurname : '') }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalSurnames.open() }}/>

                    {/* ****** MODAL SURNAMES ****** */}
                    <Modal
                        id="modalSurnames"
                        header="Surnames"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalSurnames.close() } }>
                                Close
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputFsurname' 
                                    type='text' 
                                    placeholder='First surname' 
                                    value={student.fsurname && student.fsurname != '' ? student.fsurname : ''}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                        <Row margin='10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputLsurname' 
                                    type='text' 
                                    placeholder='Last surname'
                                    value={student.lsurname && student.lsurname != '' ? student.lsurname : ''}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                    </Modal>

                    <Divider margin='15px 0 30px 0'/>

                    <CollectionItem
                        header='Edad'
                        value={ calculateAge(student.birth).toString() }/>

                    <Divider margin='15px 0 30px 0'/>

                    <CollectionItem
                        header='Email'
                        value={ student.email && student.email != '' ? student.email : '--' }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalEmail.open() }}/>

                    {/* ****** MODAL EMAIL ****** */}
                    <Modal
                        id="modalEmail"
                        header="Email"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalEmail.close() } }>
                                Close
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputEmail' 
                                    type='text' 
                                    placeholder='email' 
                                    value={student.email && student.email != '' ? student.email : ''}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                    </Modal>

                    <Divider margin='15px 0 30px 0'/>

                    <CollectionItem
                        header='Sección'
                        value={ student.section && student.section != '' ? student.section : '--' }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalSection.open() }}/>

                    {/* ****** MODAL SECTION ****** */}
                    <Modal
                        id="modalSection"
                        header="Section"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalSection.close() } }>
                                Close
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                {/* ****** SELECT SECTION ****** */}
                                <Select
                                    id="selectSection"
                                    multiple={false}
                                    onChange={function noRefCheck(){}}
                                    value={ student.section && student.section != '' ? student.section : '' }>
                                    <option disabled value="">Section</option>
                                    <option value="primary">Primary</option>
                                    <option value="secondary">Secondary</option>
                                </Select>
                            </Col>
                        </Row>
                    </Modal>

                    <Divider margin='15px 0 30px 0'/>

                    <CollectionItem
                        header='Sex'
                        value={ student.sex && student.sex != '' ? sexCharToName(student.sex) : '--' }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalSex.open() }}/>

                    {/* ****** MODAL SEX ****** */}
                    <Modal
                        id="modalSex"
                        header="Sex"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalSex.close() } }>
                                Close
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                {/* ****** SELECT SEX ****** */}
                                <Select
                                    id="selectSex"
                                    multiple={false}
                                    onChange={function noRefCheck(){}}
                                    value={ student.sex && student.sex != '' ? student.sex : '' }>
                                    <option disabled value="">Sex</option>
                                    <option value="m">Masculino</option>
                                    <option value="f">Femenino</option>
                                </Select>
                            </Col>
                        </Row>
                    </Modal>

                    <Divider margin='15px 0 30px 0'/>

                    <CollectionItem
                        header='Observaciones'
                        value={ student.observation && student.observation != '' ? student.observation : '--' }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalObservation.open() }}/>

                    {/* ****** MODAL OBSERVATION ****** */}
                    <Modal
                        id="modalObservation"
                        header="Observation"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalObservation.close() } }>
                                Close
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                <TextArea 
                                    id='inputObservation' 
                                    type='text' 
                                    placeholder='observation' 
                                    value={student.observation && student.observation != '' ? student.observation : ''}
                                    onChange={() => {}}/>
                            </Col>
                        </Row>
                    </Modal>
                    
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