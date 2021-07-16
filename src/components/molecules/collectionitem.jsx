import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../utils/constants.js';
import TextButton from '../atoms/textbutton.jsx';
import { LiSailecMedium, LabelSailecRegular } from '../atoms/label.jsx';

const TextButtonContent = styled.div`
    // Vertical center. valign-wrapper creates purple padding.
    margin: 0;
    position: absolute;
    top: 50%;
    left: 98%;
    -ms-transform: translate(-98%, -50%);
    transform: translate(-98%, -50%);
`;

const CollectionItem = (props) => {

    const ic = props.ic_path ? 
        <TextButtonContent>
            <TextButton 
                ic_path={props.ic_path} 
                float='right'
                onTapped={props.onIcTapped}>
            </TextButton>
        </TextButtonContent>
        :
        '';

    return (
        <div>
            <ul>
                <LiSailecMedium
                    text_size={SIZE.title}
                    text_color={COLOR.secondary}
                    position='relative'
                    margin='0 0 10px 0'>
                {props.header}
                {ic}
                </LiSailecMedium>
            </ul>
            <LabelSailecRegular
                text_color={COLOR.secondary}>
                {props.value}
            </LabelSailecRegular>
        </div>
    );
}


CollectionItem.propTypes = {
    header: PropTypes.string, 
    value: PropTypes.string, 
    ic_path: PropTypes.string, 
    onIcTapped: PropTypes.func
}

export default CollectionItem;