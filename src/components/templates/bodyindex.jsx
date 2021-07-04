import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import styled from 'styled-components';
import { Container, Col, Table, Modal, Select, DatePicker } from 'react-materialize';
import Button from '../atoms/button.jsx';
import { COLOR, SIZE, SCREEN_MEDIA } from '../../utils/constants.js';
import Row from '../organism/row.jsx';
import TextButton from '../atoms/textbutton.jsx'
import TextInput from '../atoms/textinput.jsx';
import TextArea from '../atoms/textarea.jsx';
import { calculateAge } from '../../utils/dates.js';
import { LabelSailecRegular } from '../atoms/label.jsx';

import { getStudents } from '../../services/studentsService.js';

import PathIcForward from '../../icons/ic_forward.svg';
import PathIcAdd from '../../icons/ic_add.svg';


const ButtonContent = styled.div`
    display: flex;
    float: right;
`;

const ModalSubtitle = styled(LabelSailecRegular)`
    font-size: ${SIZE.body};
    color: ${COLOR.secondary};
`;


const BodyIndex = () => {

    const [students, setStudents] = useState([]);
    const [modal, setModal] = useState();

    useEffect(() => {
        $(window).on('load', function(){
            // ready method is deprecated
            var auxModal = M.Modal.getInstance($('#modal0')); // Init modal
            setModal(auxModal);
        });

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
            <Row margin='80px 0 40px 0'>
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
                        <td>{student.fname + ' ' + student.mname}</td>
                        <td>{student.fsurname + ' ' + student.lsurname}</td>
                        <td>{ calculateAge(student.birth) }</td>
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
            <Row margin='40px 0 80px 0'>
                <ButtonContent>
                    <Button onTapped={() => { modal.open() }} ic_path={PathIcAdd}>Add</Button>
                </ButtonContent>

                {/* ****** MODAL ****** */}
                <Modal
                    actions={[
                    <Button onTapped={() => { modal.close() }}>Add</Button>,
                    <Button onTapped={() => { modal.close() }}>Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Add student"
                    id="modal0"
                    open={false}
                    options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                    }}>
                    <Row margin='15px 0 0 0'>
                        <ModalSubtitle>Names</ModalSubtitle>
                    </Row>
                    <Row margin='0 0'>
                        <Col s={12} m={12} l={4} xl={4}>
                            <TextInput 
                                id='fname'
                                type='text' 
                                placeholder='Primer nombre'/>
                        </Col>
                        <Col s={12} m={12} l={4} xl={4}>
                            <TextInput 
                                id='mname'
                                type='text' 
                                placeholder='Segundo nombre'/>
                        </Col>
                        <Col s={12} m={12} l={4} xl={4}>
                            <TextInput 
                                id='lname'
                                type='text' 
                                placeholder='Tercer nombre'/>
                        </Col>
                    </Row>
                    <Row margin='10px 0 0 0'>
                        <ModalSubtitle>Surname</ModalSubtitle>
                    </Row>
                    <Row margin='0 0'>
                        <Col s={12} m={12} l={6} xl={6}>
                            <TextInput 
                                id='fsurname'
                                type='text' 
                                placeholder='Primer apellido'/>
                        </Col>
                        <Col s={12} m={12} l={6} xl={6}>
                            <TextInput 
                                id='lsurname'
                                type='text' 
                                placeholder='Segundo apellido'/>
                        </Col>
                    </Row>
                    <Row margin='10px 0 0 0'>
                        <ModalSubtitle>Extras</ModalSubtitle>
                    </Row>
                    <Row margin='0 0'>
                        <Col s={12} m={12} l={6} xl={6}>
                            <TextInput 
                                id='email'
                                type='email' 
                                placeholder='email'/>
                        </Col>
                        <Col s={12} m={12} l={3} xl={3}>
                            {/* ****** SELECT ****** */}
                            <Select
                                id="Select-9"
                                multiple={false}
                                onChange={function noRefCheck(){}}
                                options={{
                                    classes: '',
                                    dropdownOptions: {
                                    alignment: 'left',
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    outDuration: 250
                                    }
                                }}
                                value="">
                                <option disabled value="">Sex</option>
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                            </Select>
                        </Col>
                        <Col s={12} m={12} l={3} xl={3}>
                            {/* ****** DATEPICKER ****** */}
                            <DatePicker
                            id='DatePicker-5'
                            placeholder='Birthday'
                            options={{
                                autoClose: false,
                                disableWeekends: false,
                                events: [],
                                firstDay: 0,
                                format: 'dd mmm, yyyy',
                                i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                                months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
                                monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                                nextMonth: '›',
                                previousMonth: '‹',
                                weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                                weekdaysAbbrev: ['S','M','T','W','T','F','S'],
                                weekdaysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
                                },
                                isRTL: false,
                                setDefaultDate: false,
                                showClearBtn: false,
                                showDaysInNextAndPreviousMonths: false,
                                showMonthAfterYear: false,
                                yearRange: 10
                            }}/>
                        </Col>
                    </Row>
                    <Row margin='15px 0 0 0'>
                        <ModalSubtitle>Observations</ModalSubtitle>
                    </Row>
                    <Row margin='0 0'>
                        <Col s={12} m={12} l={12} xl={12}>
                            <TextArea 
                                id='observation'
                                placeholder='Observations'/>
                        </Col>
                    </Row>
                    
                </Modal>
            </Row>

        </Container>
    );
}

export default BodyIndex;