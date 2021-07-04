import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as MatButton } from 'react-materialize';
import { COLOR } from '../../utils/constants.js';
import SVG from 'react-inlinesvg';


const ButtonStyled = styled(MatButton)`
    color: ${COLOR.black};
    background-color: ${COLOR.primary};
    border: none;
    text-transform: none;
    margin: ${props => props.margin ? props.margin : '0 0'};
    &:hover {
        color: ${COLOR.background};
        background-color: ${COLOR.primaryDark};
    }
    &:focus {
        color: ${COLOR.background};
        background-color: ${COLOR.primaryDark};
    }
`;

const Icon = styled(SVG)`
    fill: ${COLOR.black};
    margin: 0 12px;
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