import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import styled from 'styled-components';
import { Container, Col, Table, Modal, Select, DatePicker } from 'react-materialize';
import Button from '../atoms/button.jsx';
import { COLOR, SIZE, DATE } from '../../utils/constants.js';
import Row from '../organism/row.jsx';
import TextButton from '../atoms/textbutton.jsx'
import TextInput from '../atoms/textinput.jsx';
import TextArea from '../atoms/textarea.jsx';
import { calculateAge, getDate } from '../../utils/dates.js';
import { LabelSailecRegular } from '../atoms/label.jsx';

import { getStudents, createStudent } from '../../services/studentsService.js';

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

const submitStudent = () => {
    const student = {
        fname: $('#fname')[0].value ? $('#fname')[0].value : '',
        mname: $('#mname')[0].value ? $('#mname')[0].value : '',
        lname: $('#lname')[0].value ? $('#lname')[0].value : '',
        fsurname: $('#fsurname')[0].value ? $('#fsurname')[0].value : '',
        lsurname: $('#lsurname')[0].value ? $('#lsurname')[0].value : '',
        email: $('#email')[0].value ? $('#email')[0].value : '',
        sex: $('#sex')[0].value ? $('#sex')[0].value : '',
        birth: $('#birth')[0].value ? getDate($('#birth')[0].value, 'yyyy-MM-dd') : '',
        section: $('#section')[0].value ? $('#section')[0].value : '',
        observation: $('#observation')[0].value ? $('#observation')[0].value : ''
    }
    console.log(student);
    createStudent(student);
}


const BodyIndex = () => {

    const [students, setStudents] = useState([]);
    const [modal, setModal] = useState();
    const currentDate = new Date();

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
                        <td>{student.fname + ' ' + student.mname + ' ' + student.lname}</td>
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
                    <Button 
                        onClick={() => { modal.open() }} 
                        ic_path={PathIcAdd}
                        bg_color={COLOR.primary}
                        text_color={COLOR.black}>
                        Add
                    </Button>
                </ButtonContent>

                {/* ****** MODAL ****** */}
                <Modal
                    id="modal0"
                    header="Add student"
                    fixedFooter={false} //If true breaks DatePickers
                    actions={[
                    <Button 
                        onClick={() => { modal.close() }}
                        bg_color={COLOR.primary}
                        float='right'>
                        Close
                    </Button>,
                    <Button 
                        onClick={() => { 
                            submitStudent();
                            modal.close(); 
                        } }
                        bg_color={COLOR.primary}
                        float='right'>
                        Add
                    </Button>
                    ]}>
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
                        <Col s={12} m={12} l={4} xl={4}>
                            {/* ****** DATEPICKER ****** */}
                            <DatePicker
                            id='birth'
                            placeholder='Birthday'
                            options={{
                                autoClose: false,
                                disableWeekends: false,
                                events: [],
                                firstDay: 0,
                                format: 'dd mmm, yyyy',
                                setDefaultDate: false,
                                maxDate: currentDate,
                                i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                                months: DATE.months,
                                monthsShort: DATE.monthsShort,
                                nextMonth: '›',
                                previousMonth: '‹',
                                weekdays: DATE.weekdays,
                                weekdaysAbbrev: DATE.weekdaysAbbrev,
                                weekdaysShort: DATE.weekdaysShort
                                },
                                isRTL: false,
                                showClearBtn: false,
                                showDaysInNextAndPreviousMonths: false,
                                showMonthAfterYear: false,
                                yearRange: 36
                            }}/>
                        </Col>
                        <Col s={12} m={12} l={4} xl={4}>
                            {/* ****** SELECT SEX ****** */}
                            <Select
                                id="sex"
                                multiple={false}
                                onChange={function noRefCheck(){}}
                                value=''>
                                <option disabled value="">Sex</option>
                                <option value="m">Masculino</option>
                                <option value="f">Femenino</option>
                            </Select>
                        </Col>
                        <Col s={12} m={12} l={4} xl={4}>
                            {/* ****** SELECT SECTION ****** */}
                            <Select
                                id="section"
                                multiple={false}
                                onChange={function noRefCheck(){}}
                                value=''>
                                <option disabled value="">Section</option>
                                <option value="primary">Primary</option>
                                <option value="secondary">Secondary</option>
                            </Select>
                        </Col>
                    </Row>

                    <Row margin='10px 0 0 0'>
                        <Col s={12} m={12} l={6} xl={6}>
                            <TextInput 
                                id='email'
                                type='email' 
                                placeholder='email'/>
                        </Col>
                    </Row>
                    
                    <Row margin='10px 0 0 0'>
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