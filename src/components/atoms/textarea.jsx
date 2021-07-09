import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Textarea as MatTextArea } from 'react-materialize';

const Content = styled.div`
    display: flex;
    margin: ${props => props.margin ? props.margin : '0 0'};
`;

const TextArea = (props) => {
    return (
        <Content 
            margin={props.margin}>
            <MatTextArea 
                id={props.id} 
                placeholder={props.placeholder}
                maxLength={props.length} />
        </Content>
    );
}

TextArea.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    length: PropTypes.string, 
    margin: PropTypes.string
}

export default TextArea;