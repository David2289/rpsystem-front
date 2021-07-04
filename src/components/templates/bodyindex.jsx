import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import styled from 'styled-components';
import { Container, Col, Table, Modal } from 'react-materialize';
import { COLOR, SIZE, SCREEN_MEDIA } from '../../utils/constants.js';
import Row from '../organism/row.jsx';
import TextButton from '../atoms/textbutton.jsx'
import { calculateAge } from '../../utils/dates.js';
import Button from '../atoms/button.jsx';

import { getStudents } from '../../services/studentsService.js';

import PathIcForward from '../../icons/ic_forward.svg';
import PathIcAdd from '../../icons/ic_add.svg';


const ButtonContent = styled.div`
    display: flex;
    float: right;
`;


const BodyIndex = () => {

    const [students, setStudents] = useState([]);
    const [modal, setModal] = useState();

    useEffect(() => {
        $(window).on('load', function(){
            // ready method is deprecated
            var auxModal = M.Modal.getInstance($('#modal0'));
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
                <Modal
                    actions={[
                    <Button onTapped={() => { modal.close() }}>Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Modal Header"
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
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </Modal>
            </Row>

        </Container>
    );
}

export default BodyIndex;