import $ from 'jquery'; 


const sexCharToName = (char) => {
    if (char == 'm') {
        return 'Masculino';
    } 
    else if (char == 'f') {
        return 'Femenino';
    }
    else {
        return '';
    }
}

export { 
    sexCharToName 
};