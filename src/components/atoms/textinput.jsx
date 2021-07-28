import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInput as MatTextInput } from 'react-materialize';

const Content = styled.div`
    display: flex;
    margin: ${props => props.margin ? props.margin : '0 0'};
`;

const TextInput = (props) => {
    return (
        <Content 
            margin={props.margin}>
            <MatTextInput 
                id={props.id} 
                type={props.type}
                label={props.label}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </Content>
    );
}

TextInput.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string, 
    margin: PropTypes.string, 
    value: PropTypes.string, 
    onChange: PropTypes.func 
}

export default TextInput;