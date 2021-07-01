import React from 'react';
import styled from 'styled-components';
import TitleSect from '../atoms/titlesect.jsx';
import TextInput from '../atoms/textinput.jsx';
import TextArea from '../atoms/textarea.jsx';
import Button from '../atoms/button.jsx';

const Containter = styled.div`
    padding: 30px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02), 
                0 2px 4px rgba(0,0,0,0.02), 
                0 4px 8px rgba(0,0,0,0.02), 
                0 8px 16px rgba(0,0,0,0.02),
                0 16px 32px rgba(0,0,0,0.02);
`;


const Contact = () => {
    return(
        <Containter>
            <TitleSect>
                Escríbenos
            </TitleSect>
            <TextInput 
                type='text' 
                placeholder='Nombre'
                margin='40px 0 20px 0'/>
            <TextInput 
                type='email' 
                placeholder='Email'
                margin='20px 0'/>
            <TextArea 
                placeholder='Mensaje'
                margin='20px 0'/>
            <Button
                type='submit'>
                Enviar
            </Button>
        </Containter>
    );
}

export default Contact;