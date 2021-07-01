import React from 'react';
import PropTypes from 'prop-types';
import { COLOR, SIZE } from '../../utils/constants.js'
import { LabelSailecRegular } from './label.jsx';
import styled from 'styled-components';

const DescStyled = styled(LabelSailecRegular)`
    margin: ${props => props.margin ? props.margin : '0 0'};
    color: ${COLOR.gray};
    font-size: ${SIZE.body};
`;

const Description = (props) => {
    return (
        <DescStyled margin={props.margin}>
            {props.children}
        </DescStyled>
    );
}

Description.propTypes = {
    margin: PropTypes.string
}

export default Description