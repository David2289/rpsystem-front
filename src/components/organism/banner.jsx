import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Parallax } from 'react-materialize';
import { COLOR, SIZE, SCREEN_MEDIA } from '../../utils/constants.js';
import { LabelHarmonyRegular } from '../atoms/label.jsx';

const ParallaxStyled = styled(Parallax)`
width: 100%;
    height: 300px;
    // Cover and center background image: //
    background-position: 50% 50%; /*El cuadro ajustado se puede centrar horizontal y verticalmente*/
    background-size: cover; /*El cuadro de la imagen se ajusta a la dimensión más pequeña del div con el objetivo de cubrirla*/
    background-repeat: no-repeat;
    // To make the overlay: //
    position: relative;
    z-index: -1;
    &::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 0;
        background: ${COLOR.secondary};
        opacity: 0.6;
    }
    @media only screen and ${SCREEN_MEDIA.small} {
        height: 130px;
    }
    @media only screen and ${SCREEN_MEDIA.medium} {
        height: 130px;
    }
`;

const Title = styled(LabelHarmonyRegular)`
    z-index: 1;
    width: 100%;
`;

const Banner = (props) => {
    return (
        <ParallaxStyled
            className='valign-wrapper'
            image={<img alt="" src={props.img_path}/>}
            options={{responsiveThreshold: 0}}
            children= {
                <Title
                    text_size={SIZE.display}
                    text_color={props.title_color ? props.title_color : COLOR.white}
                    text_align='center'
                    position='relative'>
                    {props.title}
                </Title>
            }
            />
    );
}

Banner.propTypes = {
    img_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    title_color: PropTypes.string
}

export default Banner;