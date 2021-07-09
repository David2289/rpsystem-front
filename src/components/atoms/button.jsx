import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as MatButton } from 'react-materialize';
import { COLOR } from '../../utils/constants.js';
import SVG from 'react-inlinesvg';


const ButtonStyled = styled(MatButton)`
    margin: ${props => props.margin ? props.margin : '0 0'};
    float: ${props => props.float ? props.float : 'left'};
    background: ${props => props.bg_color ? props.bg_color : 'none'};
    color: ${props => props.text_color ? props.text_color : COLOR.black};
    border: ${props => props.border_color ? '1px solid ' + props.border_color : 'none'};
    border-width: ${props => props.border_width ? props.border_width : 'none'};
    svg { fill: ${props => props.text_color ? props.text_color : COLOR.black} }
    &:hover, &:focus {
        background: ${props => props.bg_color 
            ? '#' + lightenColor(props.bg_color.replace('#', ''), 15) 
            : 'none' 
        };
        border: ${props => props.border_color 
            ? '1px solid #' + lightenColor(props.border_color.replace('#', ''), 15) 
            : 'none' 
        };
        border-width: ${props => props.border_width ? props.border_width : 'none'};
        color: ${props => props.text_color 
            ? '#' + lightenColor(props.text_color.replace('#', ''), 15) 
            : 'none' 
        };
    }
`;

const Icon = styled(SVG)`
    margin: 0 12px 0 0;
    height: 12px;
`;

function lightenColor(color, percent) {
    var num = parseInt(color,16),
    amt = Math.round(1.70 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;
    return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
};


const Button = (props) => {
    return (
        <ButtonStyled
            onClick={ props.onTapped }
            margin={ props.margin }
            bg_color={ props.bg_color }
            border_color={ props.border_color }
            border_width={ props.border_width }
            text_color={ props.text_color }
            float={ props.float }>
            <Icon src={ props.ic_path }/>
            { props.children }
        </ButtonStyled>
    )
}

Button.propTypes = {
    onTapped: PropTypes.func,
    ic_path: PropTypes.string,
    bg_color: PropTypes.string, 
    border_color: PropTypes.string, 
    border_width: PropTypes.string, 
    text_color: PropTypes.string, 
    margin: PropTypes.string,
    float: PropTypes.string
}

export default Button;