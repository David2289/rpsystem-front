import { createGlobalStyle } from 'styled-components';
import { COLOR } from '../utils/constants.js';

const Root = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background: ${COLOR.background};
    }

    // To change material Text Input
    .input-field.input-outlined {
        > input, .materialize-textarea {
            border: 1px solid ${COLOR.grayClear};
            padding: 0 16px;
            background: ${COLOR.white};
            // Avoid width overflow 
            width: 100%;
            -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
            -moz-box-sizing: border-box;    /* Firefox, other Gecko */
            box-sizing: border-box;  
            //
            float: none;
            display: block;
            border-radius: 4px;
            transition: box-shadow, border-color 0.25s;
            &:focus:not([readonly]) {
                border-color: ${COLOR.gray};
                box-shadow: 0 0px 0 0 ${COLOR.gray}; //0 1px 0 0, for border 2px solid
            }
            &:focus:not([readonly]) + label {
                color: ${COLOR.black} !important;
            }
        }
        .materialize-textarea {
            padding: 16px;
            height: 200px;
        }
        > label {
            color: ${COLOR.gray};
            left: 27px;
            display: inline-flex;
            width: auto !important;
            &.active {
                background: ${COLOR.background};
                border-left: 4px solid ${COLOR.background};
                border-right: 4px solid ${COLOR.background};
                transform: translateY(-1.75rem);
                top: 1rem;
            }
        }
    }

`;

export {
    Root
}