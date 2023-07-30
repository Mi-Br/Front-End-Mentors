<script lang="ts">
  import { type error } from "./Errors";

  export function YearValidator(year: number) {
    let Err: error = { outcome: false, message: "" };
    if (year > new Date(Date.now()).getFullYear()) {
      Err.outcome = true;
      Err.message = "Must be in the past";
    }
    return Err;
  }
  export function MonthValidator(month: number) {
    let Err: error = { outcome: false, message: "" };
    if (month < 0 && month <= 12) {
      Err.outcome = true;
      Err.message = "Must be a valid month";
    }
    return Err;
  }
  export function DayValidator(day: number) {
    let Err: error = { outcome: false, message: "" };
    if (day < 0 && day > 31) {
      Err.outcome = true;
      Err.message = "Must be a valid day";
    }
    return Err;
  }
</script>
