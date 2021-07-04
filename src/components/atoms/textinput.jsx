import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInput as MatTextInput } from 'react-materialize';

const Content = styled.div`
    margin: ${props => props.margin ? props.margin : '0 0'};
`;

const TextInput = (props) => {
    return (
        <Content 
            margin={props.margin}>
            <MatTextInput 
                id={props.id} 
                type={props.type}
                placeholder={props.placeholder} />
        </Content>
    );
}

TextInput.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string, 
    margin: PropTypes.string
}

export default TextInput;