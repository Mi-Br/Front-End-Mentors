<script lang="ts">
  import "./app.css";
  import Input from "./lib/Input.svelte";
  import { type Field } from "./lib/Types";
  import { InputHasErrors, calculateAge } from "./lib/Utlis";
  let days: Field = {
    value: undefined,
    type: "day",
    error: "",
  };
  let months: Field = {
    value: undefined,
    type: "month",
    error: "",
  };
  let years: Field = {
    value: undefined,
    type: "year",
    error: "",
  };

  let daysSpan;
  let monthsSpan;
  let yearsSpan;

  $: {
    // console.log(days, months, years);
    if (InputHasErrors(days, months, years)) {
      daysSpan = "_ _";
      monthsSpan = "_ _";
      yearsSpan = "_ _";
    } else {
      // daysSpan = days.value;
      // monthsSpan = months.value;
      // yearsSpan = years.value;
      [daysSpan, monthsSpan, yearsSpan] = calculateAge(days, months, years);
    }
  }

  const handleValueChange = (event) => {
    let inputErrors = InputHasErrors(days, months, years);
    console.log("input has errors:" + inputErrors);
    console.log(days, months, years);
  };
</script>

<main>
  <div class="container">
    <div class="date-selector">
      <Input bind:field={days} on:change={handleValueChange} />
      <Input bind:field={months} on:change={handleValueChange} />
      <Input bind:field={years} on:change={handleValueChange} />
    </div>
    <div class="line">_____</div>
    <div class="days"><span>{daysSpan}</span>days</div>
    <div class="months"><span>{monthsSpan}</span>months</div>
    <div class="years"><span>{yearsSpan}</span>years</div>
  </div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    padding: 3.5 rem;
    display: flex;
    flex-direction: column;
  }
  .container > * {
  }
  .container .years,
  .months,
  .days {
    font-family: "Popins 800 Italic";
    font-size: 104px;
    line-height: 110%;
    letter-spacing: -2.08px;
  }

  .container span {
    font-size: 104px;
    font-family: "Popins 800";
    color: var(--purple);
  }
  .date-selector {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }

  @media (max-width: 740px) {
    .container {
      padding: 3rem, 1.5rem;
      background-color: aqua;
    }
    .date-selector {
      gap: 1rem;
      align-self: stretch;
    }

    .container .years,
    .months,
    .days {
      font-family: "Popins 800 Italic";
      font-size: 3.5rem;
      line-height: 110%;
      letter-spacing: -0.07px;
    }
    .container span {
      font-size: 3.5rem;
    }
  }
</style>
