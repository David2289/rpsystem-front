import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import { useParams, Redirect } from 'react-router';
import styled from 'styled-components';
import { Container, Col, Modal, Select, DatePicker } from 'react-materialize';
import Row from '../organism/row.jsx';
import CollectionItem from '../molecules/collectionitem.jsx';
import SVG from 'react-inlinesvg';
import { COLOR, DATE, SIZE } from '../../utils/constants.js';
import { LabelSailecRegular } from '../atoms/label.jsx';
import FormData from 'form-data';
import TextInput from '../atoms/textinput.jsx';
import TextArea from '../atoms/textarea.jsx';
import TitleSect from '../atoms/titlesect.jsx';
import Button from '../atoms/button.jsx';
import Divider from '../atoms/divider.jsx';
import { sexCharToName } from '../../manager/profilemanager.js';
import { 
    calculateAge, 
    getDateStringFromDateString
} from '../../utils/dates.js';
import { 
    getStudentById, 
    updateStudent, 
    updateStudentPhoto, 
    removeStudent 
} from '../../services/studentsService.js';

import PathIcUser from '../../icons/ic_user.svg';
import PathIcEdit from '../../icons/ic_edit.svg';
import PathIcEditPencil from '../../icons/ic_edit_pencil.svg';
import TextButton from '../atoms/textbutton.jsx';

const SVGStyled = styled(SVG)`
    height: 120px;
    fill: ${COLOR.gray};
    display: block;
    margin: auto;
`;

const EditPhotoContent = styled.div`
    display: flex;
`;

const BottomButtonContainer = styled.div`
    position: relative;
    height: 150px;
`;

const BottomButton = styled(Button)`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;


const BodyProfile = () => {

    const [redirectHome, setRedirectHome] = useState(false);

    const { id } = useParams();

    const [student, setStudent] = useState({
        'id': 1,
        'fname': '',
        'mname': '',
        'lname': '',
        'fsurname': '',
        'lsurname': '',
        'email': '',
        'sex': '',
        'birth': '1999-01-01', //Setting valid initial date to avoid crash.
        'photo': '',
        'regdate': '',
        'section': '',
        'observation': ''
    });

    //* MODALS */
    const [modalPhoto, setModalPhoto] = useState();
    const [modalNames, setModalNames] = useState();
    const [modalSurnames, setModalSurnames] = useState();
    const [modalBirth, setModalBirth] = useState();
    const [modalEmail, setModalEmail] = useState();
    const [modalSection, setModalSection] = useState();
    const [modalSex, setModalSex] = useState();
    const [modalObs, setModalObs] = useState();
    const [modalDelete, setModalDelete] = useState();

    //* INPUT VALUES */
    const [photoFile, setPhotoFile] = useState(null);
    const [fnameValue, setFnameValue] = useState({value: ''});
    const [mnameValue, setMnameValue] = useState({value: ''});
    const [lnameValue, setLnameValue] = useState({value: ''});
    const [fsurnameValue, setFsurnameValue] = useState({value: ''});
    const [lsurnameValue, setLsurnameValue] = useState({value: ''});
    const currentDate = new Date();
    const [birthDate, setBirthDate] = useState(new Date()); // Student birth Date
    const [emailValue, setEmailValue] = useState({value: ''});
    const [obsValue, setObsValue] = useState({value: ''});

    useEffect(() => {
        $(window).on('load', function(){
            // ready method is deprecated
            setModalPhoto(M.Modal.getInstance($('#modalPhoto')));
            setModalNames(M.Modal.getInstance($('#modalNames')));
            setModalSurnames(M.Modal.getInstance($('#modalSurnames')));
            setModalBirth(M.Modal.getInstance($('#modalBirth')));
            setModalEmail(M.Modal.getInstance($('#modalEmail')));
            setModalSection(M.Modal.getInstance($('#modalSection')));
            setModalSex(M.Modal.getInstance($('#modalSex')));
            setModalObs(M.Modal.getInstance($('#modalObs')));
            setModalDelete(M.Modal.getInstance($('#modalDelete')));
        });

        getStudentById(id).then(json => {
            if (json.error) {
                console.log(error);
            } else {
                setStudent(json.data);
                setFnameValue({value: json.data.fname})
                setMnameValue({value: json.data.mname})
                setLnameValue({value: json.data.lname})
                setFsurnameValue({value: json.data.fsurname})
                setLsurnameValue({value: json.data.lsurname})
                setBirthDate(new Date(json.data.birth))
                setEmailValue({value: json.data.email})
                setObsValue({value: json.data.observation})
            }
        })
    }, [])

    return(

        redirectHome 
        ?
        <Redirect to="/" /> 
        :
        <Container>
            <Row margin='80px 0 60px 0'>
                <TitleSect>Details</TitleSect>
            </Row>
            <Row margin='40px 0 80px 0'>
                <Col s={12} m={12} l={3} xl={3}>
                    <SVGStyled src={PathIcUser}></SVGStyled>
                    <EditPhotoContent>
                        <TextButton 
                            ic_path={PathIcEditPencil} 
                            ic_size='20px'
                            margin='20px auto'
                            separation='4px'
                            onTapped={ () => { modalPhoto.open() } }>
                            Edit
                        </TextButton>

                        <Modal
                            id="modalPhoto"
                            header="Photo"
                            actions={[
                                <Button 
                                    bg_color={ COLOR.primary } 
                                    float='right'
                                    onTapped={ () => { modalPhoto.close() } }>
                                    Close
                                </Button>,
                                <Button 
                                    disabled={ !photoFile }
                                    bg_color={ COLOR.primary } 
                                    float='right'
                                    onTapped={ () => { 
                                        const formdata = new FormData()
                                        formdata.append('image', photoFile) // 'image' use the same name in multer in the API REST side.
                                        updateStudentPhoto(id, formdata)
                                        .then(json => {
                                            if (!json.error) {
                                                location.reload();
                                            }
                                        })
                                    } }>
                                    Update
                                </Button>
                            ]}>
                            <Row margin='40px 0 40px 0'>
                                <Col s={12}>
                                    <TextInput 
                                        id='inputPhoto' 
                                        type='file' 
                                        label='File'
                                        onChange={ (event) => { setPhotoFile(event.target.files[0]) } } />
                                </Col>
                            </Row>
                        </Modal>

                    </EditPhotoContent>
                    
                </Col>
                <Col s={12} m={12} l={9} xl={9}>

                    {/* ****** NAMES ****** */}

                    <CollectionItem
                        header='Names'
                        value={
                            student.fname 
                                    + (student.mname && student.mname != '' ? ' ' + student.mname : '') 
                                    + (student.lname && student.lname != '' ? ' ' + student.lname : '')
                        }
                        ic_path={ PathIcEdit }
                        onIcTapped={ () => { modalNames.open() } }/>

                    <Modal
                        id="modalNames"
                        header="Names"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalNames.close() } }>
                                Close
                            </Button>, 
                            <Button 
                                disabled={ 
                                    fnameValue.value == student.fname && 
                                    mnameValue.value == student.mname && 
                                    lnameValue.value == student.lname 
                                }
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { 
                                    updateStudent(id, {
                                        fname: fnameValue.value,
                                        mname: mnameValue.value,
                                        lname: lnameValue.value,
                                    }).then(json => {
                                        if (!json.error) {
                                            location.reload();
                                        }
                                    })
                                 } }>
                                Update
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputFname' 
                                    name='inputFname'
                                    type='text' 
                                    placeholder='First name' 
                                    value={fnameValue.value}
                                    onChange={ (event) => { setFnameValue({value: event.target.value}) } }/>
                            </Col>
                        </Row>
                        <Row margin='10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputMname' 
                                    type='text' 
                                    placeholder='Second name'
                                    value={mnameValue.value}
                                    onChange={ (event) => { setMnameValue({value: event.target.value}) } }/>
                            </Col>
                        </Row>
                        <Row margin='10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputLname' 
                                    type='text' 
                                    placeholder='Third name'
                                    value={lnameValue.value}
                                    onChange={ (event) => { setLnameValue({value: event.target.value}) } }/>
                            </Col>
                        </Row>
                    </Modal>

                    {/* ****** SURNAMES ****** */}
                    
                    <Divider margin='15px 0 30px 0'/>

                    <CollectionItem
                        header='Surnames'
                        value={ (student.fsurname && student.fsurname != '' ? student.fsurname + ' ' : '')
                                + (student.lsurname && student.lsurname != '' ? student.lsurname : '') }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalSurnames.open() }}/>

                    <Modal
                        id="modalSurnames"
                        header="Surnames"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalSurnames.close() } }>
                                Close
                            </Button>, 
                            <Button 
                                disabled={ 
                                    fsurnameValue.value == student.fsurname && 
                                    lsurnameValue.value == student.lsurname 
                                }
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { 
                                    updateStudent(id, {
                                        fsurname: fsurnameValue.value,
                                        lsurname: lsurnameValue.value
                                    }).then(json => {
                                        if (!json.error) {
                                            location.reload();
                                        }
                                    })
                                } }>
                                Update
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputFsurname' 
                                    type='text' 
                                    placeholder='First surname' 
                                    value={fsurnameValue.value}
                                    onChange={ (event) => { setFsurnameValue({value: event.target.value}) } }/>
                            </Col>
                        </Row>
                        <Row margin='10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputLsurname' 
                                    type='text' 
                                    placeholder='Last surname'
                                    value={lsurnameValue.value}
                                    onChange={ (event) => { setLsurnameValue({value: event.target.value}) } }/>
                            </Col>
                        </Row>
                    </Modal>

                    <Divider margin='15px 0 30px 0'/>

                    {/* ****** BIRTHDAY ****** */}

                    <CollectionItem
                        header='Birthday'
                        value={ getDateStringFromDateString(student.birth, 'dd MMM, yyyy') 
                                + ' (' + calculateAge(student.birth).toString() + ')' }
                        ic_path={ PathIcEdit }
                        onIcTapped={ () => { modalBirth.open() } } />

                    <Modal
                        id="modalBirth"
                        header="Birth"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalBirth.close() } }>
                                Close
                            </Button>,
                            <Button 
                                disabled={ false }
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { 
                                    const selected = getDateStringFromDateString($('#inputBirth')[0].value, 'yyyy-MM-dd');
                                    updateStudent(id, {
                                        birth: selected
                                    }).then(json => {
                                        if (!json.error) {
                                            location.reload();
                                        }
                                    })
                                } }>
                                Update
                            </Button>
                        ]}>
                        <Row margin='100px 0 170px 0'>
                            <Col s={12}>
                                {/* ****** DATEPICKER ****** */}
                                <DatePicker
                                id='inputBirth'
                                placeholder='Birthday'
                                options={{
                                    autoClose: false,
                                    disableWeekends: false,
                                    events: [],
                                    firstDay: 0,
                                    format: 'dd mmm, yyyy',
                                    defaultDate: birthDate,
                                    setDefaultDate: true,
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
                                    onSelect: function(date) {
                                        //Close datepicker
                                    }, 
                                    showClearBtn: false,
                                    showDaysInNextAndPreviousMonths: false,
                                    showMonthAfterYear: false,
                                    yearRange: 36
                                }}/>
                            </Col>
                        </Row>
                    </Modal>

                    <Divider margin='15px 0 30px 0'/>

                    {/* ****** EMAIL ****** */}

                    <CollectionItem
                        header='Email'
                        value={ student.email && student.email != '' ? student.email : '--' }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalEmail.open() }}/>

                    <Modal
                        id="modalEmail"
                        header="Email"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalEmail.close() } }>
                                Close
                            </Button>,
                            <Button 
                                disabled={ emailValue.value == student.email }
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { 
                                    updateStudent(id, {
                                        email: emailValue.value
                                    }).then(json => {
                                        if (!json.error) {
                                            location.reload();
                                        }
                                    })
                                } }>
                                Update
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                <TextInput 
                                    id='inputEmail' 
                                    type='text' 
                                    placeholder='email' 
                                    value={emailValue.value}
                                    onChange={(event) => { setEmailValue({value: event.target.value}) }}/>
                            </Col>
                        </Row>
                    </Modal>

                    <Divider margin='15px 0 30px 0'/>

                    {/* ****** SECTION ****** */}

                    <CollectionItem
                        header='Section'
                        value={ student.section && student.section != '' ? student.section : '--' }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalSection.open() }}/>

                    <Modal
                        id="modalSection"
                        header="Section"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalSection.close() } }>
                                Close
                            </Button>,
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { 
                                    updateStudent(id, {
                                        section: $('#selectSection')[0].value ? $('#selectSection')[0].value : ''
                                    }).then(json => {
                                        if (!json.error) {
                                            location.reload();
                                        }
                                    })
                                } }>
                                Update
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

                    {/* ****** SEX ****** */}

                    <CollectionItem
                        header='Sex'
                        value={ student.sex && student.sex != '' ? sexCharToName(student.sex) : '--' }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalSex.open() }}/>

                    <Modal
                        id="modalSex"
                        header="Sex"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalSex.close() } }>
                                Close
                            </Button>,
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { 
                                    updateStudent(id, {
                                        sex: $('#selectSex')[0].value ? $('#selectSex')[0].value : ''
                                    }).then(json => {
                                        if (!json.error) {
                                            location.reload();
                                        }
                                    })
                                } }>
                                Update
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

                    {/* ****** OBSERVATION ****** */}

                    <CollectionItem
                        header='Observations'
                        value={ student.observation && student.observation != '' ? student.observation : '--' }
                        ic_path={ PathIcEdit }
                        onIcTapped={() => { modalObs.open() }}/>

                    <Modal
                        id="modalObs"
                        header="Observations"
                        actions={[
                            <Button 
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { modalObs.close() } }>
                                Close
                            </Button>,
                            <Button 
                                disabled={ obsValue.value == student.observation }
                                bg_color={ COLOR.primary } 
                                float='right'
                                onTapped={ () => { 
                                    updateStudent(id, {
                                        observation: $('#inputObs')[0].value ? $('#inputObs')[0].value : ''
                                    }).then(json => {
                                        if (!json.error) {
                                            location.reload();
                                        }
                                    })
                                } }>
                                Update
                            </Button>
                        ]}>
                        <Row margin='20px 0 10px 0'>
                            <Col s={12}>
                                <TextArea 
                                    id='inputObs' 
                                    type='text' 
                                    placeholder='observation' 
                                    value={obsValue.value}
                                    onChange={(event) => { setObsValue({value: event.target.value}) }}/>
                            </Col>
                        </Row>
                    </Modal>
                    
                </Col>
            </Row>

            <Row margin='80px auto'>
                <BottomButtonContainer>

                    <BottomButton
                        bg_color={COLOR.red}
                        text_color={COLOR.white}
                        onTapped={ () => { modalDelete.open() } }>
                        Remove
                    </BottomButton>

                    <Modal
                        id="modalDelete"
                        actions={null}>
                        <Row margin='40px 0 40px 0'>
                            <Col s={12}>
                                <LabelSailecRegular
                                    text_size={SIZE.title}
                                    text_align='center'>
                                    Are you sure you want to remove this student?
                                </LabelSailecRegular>
                            </Col>
                        </Row>
                        <Row margin='40px 0 0 0'>
                            <Col s={6}>
                                <Button 
                                    float='right'
                                    bg_width='100px'
                                    bg_color={COLOR.red}
                                    text_color={COLOR.white}
                                    onTapped={ () => { 
                                        removeStudent(id)
                                        .then(json => {
                                            if (!json.error) {
                                                setRedirectHome(true);
                                            }
                                        })
                                        } }>
                                    Yes
                                </Button>
                            </Col>
                            <Col s={6}>
                                <Button 
                                    float='left'
                                    bg_width='100px'
                                    bg_color={COLOR.white}
                                    border_color={COLOR.grayDark}
                                    border_width='1px'
                                    text_color={COLOR.black}
                                    onTapped={ () => { modalDelete.close() } }>
                                    No
                                </Button>
                            </Col>
                        </Row>
                    </Modal>

                </BottomButtonContainer>

            </Row>
        </Container>
    )
}

export default BodyProfile;