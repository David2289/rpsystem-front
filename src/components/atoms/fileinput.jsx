import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../utils/constants';

const Content = styled.div`
    display: flex;
`;

const Label = styled.label`
    background-color: ${COLOR.primary};
    color: ${COLOR.black};
    font-size: ${SIZE.body};
    padding: 10px 20px;
    border-radius: 0.3rem;
    cursor: pointer;
    margin: ${props => props.margin ? props.margin : '0 0'};
`;


const FileInput = (props) => {
    return (
        <Content>
            <input 
                type='file' id='actual-btn' 
                hidden/>
            <Label 
                htmlFor='actual-btn' 
                margin={props.margin}>
                { props.label }
            </Label>
        </Content>
    );
}

FileInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string, 
    margin: PropTypes.string, 
    value: PropTypes.string, 
    onChange: PropTypes.func 
}

export default FileInput;