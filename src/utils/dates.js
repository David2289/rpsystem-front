import '@js-joda/timezone' // Just needs to be imported; registers itself automatically
import { DateTimeFormatter, LocalDate, nativeJs } from '@js-joda/core'
import { Locale } from '@js-joda/locale_en'
import {¬†capitalizeFirstLetter } from './utils'

export const calculateAge = (birth) => {
    var birthDate = new Date(birth);
    var ageDif = Date.now() - birthDate;
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const getDateStringFromDateString = (inputDateString, ouputFormat) => {
    var inputJsDate = new Date(inputDateString); //Native JS Date
    var inputDate = LocalDate.from(nativeJs(inputJsDate));
    const formatter = DateTimeFormatter
                        .ofPattern(ouputFormat)
                        .withLocale(new Locale('en', 'US', 'en'));
    const outputDateString = inputDate.format(formatter);
    return capitalizeFirstLetter(outputDateString.replace('.', ''))
}

export const getDateStringFromDate = (inputJsDate, ouputFormat) => {
    var inputDate = LocalDate.from(nativeJs(inputJsDate));
    const formatter = DateTimeFormatter
                        .ofPattern(ouputFormat)
                        .withLocale(new Locale('en', 'US', 'en'));
    const outputDateString = inputDate.format(formatter);
    return capitalizeFirstLetter(outputDateString.replace('.', ''))
}

export const isSameDate = (jsDate1, jsDate2) => {
    console.log(jsDate1.getTime() == jsDate2.getTime())
    return jsDate1.getTime() == jsDate2.getTime();
}
