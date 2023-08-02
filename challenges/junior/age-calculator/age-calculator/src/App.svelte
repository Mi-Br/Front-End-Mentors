<script lang="ts">
  import "./app.css";
  import Input from "./lib/Input.svelte";
  import type Field from "./lib/Validators.svelte";

  let days: Field = {
    value: undefined,
    type: "day",
  };
  let months: Field = {
    value: undefined,
    type: "month",
  };
  let years: Field = {
    value: undefined,
    type: "year",
  };

  let daysSpan;
  let monthsSpan;
  let yearsSpan;

  $: {
    daysSpan = days.value === undefined ? "_ _" : days.value;
    monthsSpan = months.value === undefined ? "_ _" : months.value;
    yearsSpan = years.value === undefined ? "_ _" : years.value;
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
  };
</script>

<main>
  <div class="container">
    <div class="date-selector">
      <Input field={days} on:change={handleValueChange} error="" />
      <Input
        field={months}
        on:change={handleValueChange}
        error="field must not be empty"
      />
      <Input
        field={years}
        on:change={handleValueChange}
        error="field must be good"
      />
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
