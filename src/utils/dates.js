import 'js-joda-timezone' // Just needs to be imported; registers itself automatically
import { DateTimeFormatter, LocalDate, nativeJs } from 'js-joda'

export const calculateAge = (birth) => {
    var birthDate = new Date(birth);
    var ageDif = Date.now() - birthDate;
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const getDate = (inputDateString, ouputFormat) => {
    var inputJsDate = new Date(inputDateString); //Native JS Date
    var inputDate = LocalDate.from(nativeJs(inputJsDate));
    const formatter = DateTimeFormatter.ofPattern(ouputFormat);
    return inputDate.format(formatter)
}
