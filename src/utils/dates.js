
export const calculateAge = (birth) => {
    var birthDate = new Date(birth);
    var ageDif = Date.now() - birthDate;
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
