import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
    margin: ${props => props.margin ? props.margin : '0 0'};
`;

const TextArea = (props) => {
    return (
        <Content 
            className='input-field input-outlined'
            margin={props.margin}>
            <textarea 
                className='materialize-textarea'
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