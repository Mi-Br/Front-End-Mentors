<script lang="ts">
  import "./app.css";
  import Input from "./lib/Input.svelte";
  import { type Field } from "./lib/Types";
  import { InputHasErrors } from "./lib/Utlis";
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
    if (InputHasErrors(days, months, years)) {
      daysSpan = "_ _";
      monthsSpan = "_ _";
      yearsSpan = "_ _";
    }
  }

  const handleValueChange = (event) => {
    switch (event.detail.type) {
      case "day":
        days.value = event.detail.value;
        break;
      case "month":
        months.value = event.detail.value;
        break;
      case "year":
        years.value = event.detail.value;
        break;
    }
    InputHasErrors(days, months, years);
  };
</script>

<main>
  <div class="container">
    <div class="date-selector">
      <Input field={days} on:change={handleValueChange} />
      <Input field={months} on:change={handleValueChange} />
      <Input field={years} on:change={handleValueChange} />
    </div>
    <div class="line">_____</div>
    <div class="year"><span>{daysSpan}</span>days</div>
    <div class="months"><span>{monthsSpan}</span>months</div>
    <div class="days"><span>{yearsSpan}</span>years</div>
  </div>
</main>

<style>
  * {
    /* outline: 1px solid deeppink; */
  }
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
  .container .year,
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
</style>
