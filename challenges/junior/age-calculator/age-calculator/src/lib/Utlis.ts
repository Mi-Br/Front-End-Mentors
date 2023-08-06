
import { type Field } from "./Types";

export const InputHasErrors = (day: Field, month: Field, year: Field): boolean => {
    let hasErrors = false;
    // hasErrors = fieldsNotEmpty(day, month, year);
    // if(hasErrors) return hasErrors;
    if(!validDay(day) || !validMonth(month) || !validYear(year)) {
        hasErrors=true
        return hasErrors
    };
    let dateString = `${year.value}-${month.value}-${day.value}`
    const unixTimeZero = Date.parse(dateString)
    console.log(dateString, '-->',unixTimeZero)
    if (isNaN(unixTimeZero)) {
        day.error = 'Must be a valid date'
        hasErrors=true
    } else {
        hasErrors=false
        day.error = ""
    }
    return hasErrors
};

export function validDay(day: Field): boolean {
    if (!day.value) {
        day.error = "Input required"
        return false
    }
    let validDay = day.value > 0 && day.value <= 31;
    if (!validDay) {
        day.error = "Must be a valid day";
    } else {
        day.error = "";
    } 
    return validDay;
}

export function validMonth(month: Field): boolean {
    if (!month.value) {
        month.error = "Input required"
        return false
    }
    let validMonth = month.value > 0 && month.value <= 12;
    if (!validMonth) {
        month.error = "Must be a valid month";
    } else {
        month.error = "";
    }
    return validMonth;
}
export function validYear(year: Field): boolean {
    if (!year.value) {
        year.error = "Input required"
        return false
    }
    let validYear = year.value > 999 && year.value <= new Date(Date.now()).getFullYear();
    if (!validYear) {
        year.error = "Must be in the past";
    } else {
        year.error = "";
    }
    return validYear;
}

export function calculateAge (day, month, year) :string[] {
    let dateString = `${year.value}-${month.value}-${day.value}`;
    const birthDate = new Date(dateString);
    console.log(birthDate)
    const currentDate = new Date();

    // Calculate the difference in milliseconds between current date and birth date
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();

    // Calculate the number of years
    // const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

    // Calculate the remaining months and days
    // const remainingMilliseconds = ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25);
    // const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30.4375));
    // const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));

    const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const remainingMilliseconds = ageInMilliseconds % (1000 * 60 * 60 * 24 * 365);
    const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));

    // Construct the result array
    const result: string[] = [`${days}`, `${months}`, `${years}`];
    console.log(years, months,days)
    return result;

}