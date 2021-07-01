import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../utils/constants.js'

const Content = styled.div`
    height: 2px;
    background-color: ${props => props.color ? props.color : COLOR.grayClear};
    margin: ${props => props.margin ? props.margin : SIZE.row_margin};
`;

const Divider = (props) => {
    return (
        <Content 
            color={props.color}
            margin={props.margin} />
    );
}

Divider.propTypes = {
    color: PropTypes.string, 
    margin: PropTypes.string,
}

export default Divider;