import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../utils/constants.js'
import { LabelSailecBold } from '../atoms/label.jsx'


const Content = styled.div`
    margin: ${props => props.margin ? props.margin : '0'};
`;

const TitleDisplay = styled(LabelSailecBold)`
    font-size: ${SIZE.display};
    color: ${props => props.title_color ? props.title_color : COLOR.secondary};
`;

const Underline = styled.div`
    width: 90px;
    height: 4px;
    background-color: ${COLOR.primary};
    margin-top: 10px;
`;


const TitleSect = (props) => {
    return (
        <Content 
            margin={props.margin}>
            <TitleDisplay title_color={props.color}>{props.children}</TitleDisplay>
            <Underline></Underline>
        </Content>
    );
}

TitleSect.propTypes = {
    color: PropTypes.string, 
    margin: PropTypes.string,
}

export default TitleSect;