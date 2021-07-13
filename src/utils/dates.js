import '@js-joda/timezone' // Just needs to be imported; registers itself automatically
import { DateTimeFormatter, LocalDate, nativeJs } from '@js-joda/core'
import { Locale } from '@js-joda/locale_es'

export const calculateAge = (birth) => {
    var birthDate = new Date(birth);
    var ageDif = Date.now() - birthDate;
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const getDate = (inputDateString, ouputFormat) => {
    var inputJsDate = new Date(inputDateString); //Native JS Date
    var inputDate = LocalDate.from(nativeJs(inputJsDate));
    const formatter = DateTimeFormatter
                        .ofPattern(ouputFormat)
                        .withLocale(new Locale('es', 'ES', 'es'));
    return inputDate.format(formatter)
}
