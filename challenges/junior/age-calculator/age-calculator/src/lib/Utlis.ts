
import { type Field } from "./Types";

export const InputHasErrors = (day: Field, month: Field, year: Field): boolean => {
    let hasErrors = false;
    hasErrors = fieldsNotEmpty(day, month, year);
    return hasErrors;

};
// Field validators

function fieldsNotEmpty(...args: Field[]): boolean {
    let hasErrors = false;
    args.forEach((field) => {
        //@ts-ignore input field, although it is a number, it can be '' when its empty
        if (typeof field.value === "undefined" || field.value == '') {
            hasErrors = true;
            field.error = "Field is required";
        } else {
            field.error = "";
        }
        console.log(field);
    });
    return hasErrors;
}

export function validDay(day: Field): boolean {
    let validDate = day.value > 0 && day.value <= 31;
    if (!validDate) {
        day.error = "Must be a valid day";
    } else {
        day.error = "";
    }
    return validDate;
}

export function validMonth(month: Field): boolean {
    let validMonth = month.value > 0 && month.value <= 12;
    if (!validMonth) {
        month.error = "Must be a valid month";
    } else {
        month.error = "";
    }
    return validMonth;
}
export function validYear(year: Field): boolean {
    let validYear = year.value > 0 && year.value <= new Date(Date.now()).getFullYear();
    if (!validYear) {
        year.error = "Must be in the past";
    } else {
        year.error = "";
    }
    return validYear;
}

//Must be a valid day
//1. must be between 1 and 31
//2. must be a valid day for the month

//Must be a valid month
// 1. must be between 1 and 12

//Must be a valid year
// 1. must be in the past

// must be a valid date, for instance 31/02/2021 is not valid
// all fields must have value otherwise it is not valid

// export function YearValidator(year: number) {
//   let Err: error = { outcome: false, message: "" };
//   if (year > new Date(Date.now()).getFullYear()) {
//     Err.outcome = true;
//     Err.message = "Must be in the past";
//   }
//   return Err;
// }
// export function MonthValidator(month: number) {
//   let Err: error = { outcome: false, message: "" };
//   if (month < 0 && month <= 12) {
//     Err.outcome = true;
//     Err.message = "Must be a valid month";
//   }
//   return Err;
// }
// export function DayValidator(day: number) {
//   let Err: error = { outcome: false, message: "" };
//   if (day < 0 && day > 31) {
//     Err.outcome = true;
//     Err.message = "Must be a valid day";
//   }
//   return Err;
// }
