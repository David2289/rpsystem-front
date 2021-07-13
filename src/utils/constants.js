
const COLOR = {
    primary: '#FFCA18',
    primaryDark: '#F0BC11',
    primaryClear: '#FFEEB5',
    gold: '#C99B02',
    secondary: '#101439',
    secondaryClear: '#7278A8',
    background: '#FFFFF6',
    white: '#FFFFFF',
    black: '#333333',
    gray: '#999999',
    grayDark: '#777777',
    grayClear: '#EDEDED',
    red: '#FF6961'
}

const SIZE = {
    display: '36px',
    headline: '28px',
    title: '20px',
    subtitle: '18px',
    body: '16px',
    caption: '13px',
    small: '11px',
    row_margin: '80px 0',
    inp_radious: '3px' // Input border radious
}

const SCREEN_MEDIA = {
    small: `(min-width: 0px) and (max-width: 600px)`,
    medium : `(min-width: 600px) and (max-width: 992px)`,
    long: `(min-width: 992px) and (max-width: 1200px)`,
    xlong: `(min-width: 1200px)`
}

const LABEL = {
    initial: 'Inicio',
    us: 'Nosotros',
    contact: 'Contacto',
    service: 'Servicios'
}

const DATE = {
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    weekdaysAbbrev: ['S','M','T','W','T','F','S'],
    weekdaysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
}

export {
    COLOR,
    SIZE,
    SCREEN_MEDIA,
    LABEL,
    DATE
}