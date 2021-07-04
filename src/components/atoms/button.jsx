import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as MatButton } from 'react-materialize';
import { COLOR } from '../../utils/constants.js';
import SVG from 'react-inlinesvg';


const ButtonStyled = styled(MatButton)`
    margin: ${props => props.margin ? props.margin : '0 0'};
`;

const Icon = styled(SVG)`
    fill: ${COLOR.black};
    margin: 0 12px 0 0;
    height: 12px;
`;


const Button = (props) => {
    return (
        <ButtonStyled
            onClick={ props.onTapped }
            margin={ props.margin }>
            <Icon src={ props.ic_path }/>
            { props.children }
        </ButtonStyled>
    )
}

Button.propTypes = {
    onTapped: PropTypes.func,
    ic_path: PropTypes.string, 
    margin: PropTypes.string,
}

export default Button;