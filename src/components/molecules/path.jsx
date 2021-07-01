import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE, LABEL } from '../../utils/constants.js';
import TextButton from '../atoms/textbutton.jsx';

import PathIcHome from '../../icons/ic_home.svg';
import PathIcForward from '../../icons/ic_forward.svg';

const Content = styled.ul`
    display: flex;
    float: left;
    margin: ${props => props.margin ? props.margin : '0'};
`;


const Path = (props) => {
    return (
        <Content
            margin={props.margin}>
            <li>
                <TextButton
                    href='/'
                    ic_path={PathIcHome}
                    ic_size='18px'
                    title_color={COLOR.black}
                    title_size={SIZE.caption}
                    separation='9px' >
                    {LABEL.initial} 
                </TextButton>
            </li>
            <li>
                <TextButton
                    ic_path={PathIcForward}
                    ic_size='15px'
                    title_color={COLOR.black}
                    title_size={SIZE.caption}
                    separation='9px' >
                    {props.endpoint}
                </TextButton>
            </li>
        </Content>
    );
}

Path.propTypes = {
    endpoint: PropTypes.string,
    margin: PropTypes.string,
}

export default Path;