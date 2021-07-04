import { createGlobalStyle } from 'styled-components';

import SailecRegular from '../fonts/sailec-regular-webfont.woff';
import SailecRegular2 from '../fonts/sailec-regular-webfont.woff2';

import SailecMedium from '../fonts/sailec-medium-webfont.woff';
import SailecMedium2 from '../fonts/sailec-medium-webfont.woff2';

import SailecBold from '../fonts/sailec-bold-webfont.woff';
import SailecBold2 from '../fonts/sailec-bold-webfont.woff2';

import SailecLight from '../fonts/sailec-light-webfont.woff';
import SailecLight2 from '../fonts/sailec-light-webfont.woff2';

import HarmonyRegular from '../fonts/instantharmonydemo-webfont.woff';
import HarmonyRegular2 from '../fonts/instantharmonydemo-webfont.woff2';

import HarmonyLite from '../fonts/instantharmonydemo_lite-webfont.woff';
import HarmonyLite2 from '../fonts/instantharmonydemo_lite-webfont.woff2';


const FontSailecRegular = createGlobalStyle`
    @font-face {
        font-family: 'Sailec Regular';
        src: local('Sailec Regular'), local('Sailec Regular'),
        url(${SailecRegular2}) format('woff2'),
        url(${SailecRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const FontSailecMedium = createGlobalStyle`
    @font-face {
        font-family: 'Sailec Medium';
        src: local('Sailec Medium'), local('Sailec Medium'),
        url(${SailecMedium2}) format('woff2'),
        url(${SailecMedium}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const FontSailecBold = createGlobalStyle`
    @font-face {
        font-family: 'Sailec Bold';
        src: local('Sailec Bold'), local('Sailec Bold'),
        url(${SailecBold2}) format('woff2'),
        url(${SailecBold}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const FontSailecLight = createGlobalStyle`
    @font-face {
        font-family: 'Sailec Light';
        src: local('Sailec Light'), local('Sailec Light'),
        url(${SailecLight2}) format('woff2'),
        url(${SailecLight}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const FontHarmonyRegular = createGlobalStyle`
    @font-face {
        font-family: 'Harmony Regular';
        src: local('Harmony Regular'), local('Harmony Regular'),
        url(${HarmonyRegular2}) format('woff2'),
        url(${HarmonyRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const FontHarmonyLite = createGlobalStyle`
    @font-face {
        font-family: 'Harmony Lite';
        src: local('Harmony Lite'), local('Harmony Lite'),
        url(${HarmonyLite2}) format('woff2'),
        url(${HarmonyLite}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;


export { 
    FontSailecRegular,
    FontSailecMedium,
    FontSailecBold,
    FontSailecLight,
    FontHarmonyRegular,
    FontHarmonyLite
}