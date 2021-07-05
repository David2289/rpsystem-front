import { createGlobalStyle } from 'styled-components';
import { COLOR, SIZE } from '../utils/constants.js';

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


    // ******  BUTTONS  ******

    .btn, .btn-large {
        color: ${COLOR.black};
        background-color: ${COLOR.primary};
        border: none;
        text-transform: none;
        &:hover {
            color: ${COLOR.white};
            background-color: ${COLOR.primaryDark};
            svg { fill: ${COLOR.white}; }
        }
        &:focus {
            color: ${COLOR.white};
            background-color: ${COLOR.primaryDark};
        }
    }
    .modal.open {
        .modal-footer {
            .btn {
                margin: 0 8px;
            }
        }
    }


    // ******  INPUTS  ******

    // To change select options text color
    ul.dropdown-content.select-dropdown li span {
        color: ${COLOR.black}; /* no need for !important :) */
    }

    .input-field.col {
        width: 100%;
        margin: 0 0;
        padding: 0 0;
        > input, textarea, .select-wrapper > input {
            font-family: 'Sailec Light';
            font-size: 14px;
            border: 1px solid ${COLOR.gray};
            padding: 0 16px;
            background: none;
            // Avoid width overflow 
            width: 100%;
            -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
            -moz-box-sizing: border-box;    /* Firefox, other Gecko */
            box-sizing: border-box;  
            //
            float: none;
            display: block;
            border-radius: ${SIZE.inp_radious};
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
    }


    // ******  DATE PICKER  ******
    .datepicker-date-display {
        background-color: ${COLOR.primaryDark}
    }
    .datepicker-day-button:focus {
        color: white !important;
        background-color: ${COLOR.primaryClear}
    }
    .datepicker-done,
    .datepicker-cancel,
    .select-dropdown li>span,
    .is-today {
        color: ${COLOR.gold} !important
    }
    td.is-selected,
    .month-prev:active,
    .month-prev:focus,
    .month-next:active,
    .month-next:focus {
        background-color: ${COLOR.primaryDark} !important
    }
    td.is-selected.is-today {
        color: white !important
    }

`;

export {
    Root
}