<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { type Field } from "./Types";
  import { validDay, validMonth, validYear } from "./Utlis";
  export let field: Field;

  const dispatch = createEventDispatcher();
  const onChange = (event) => {
    // const newValue = event.target.value;
    dispatch("change");
  };

  const validateField = (field: Field): boolean => {
    switch (field.type) {
      case "day":
        return validDay(field);
        break;
      case "month":
        return validMonth(field);
        break;
      case "year":
        return validYear(field);
        break;
    }
  };

  let placeholder: string;
  switch (field.type) {
    case "day":
      placeholder = "DD";
      break;
    case "month":
      placeholder = "MM";
      break;
    case "year":
      placeholder = "YYYY";
      break;
  }

  $: {
    validateField(field);
  }
</script>

<div class="input-block">
  <label for="input" />
  <input
    type="number"
    name="input"
    on:keyup={onChange}
    bind:value={field.value}
    {placeholder}
    class:invalid={field.error != ""}
  />
  {#if field.error != ""}
    <div class="error">{field.error}</div>
  {/if}
</div>

<style>
  label {
    font-family: "Popins 700";
    font-size: 0.875rem;
    color: var(--smokey-grey);
    text-transform: uppercase;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Works for Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input {
    all: unset;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    border: 1px solid var(--line);
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-family: "Popins 700";
    color: var(--off-black);
    font-size: 2rem;
    letter-spacing: 0.2rem;
    width: 10rem;
    transition: border 0.2s;
  }
  input:focus {
    border: 1px solid var(--purple);
  }
  .invalid {
    border: 1px solid var(--light-red);
  }
  .error {
    position: relative;
    left: 5px;
    color: var(--light-red);
    font-size: 14px;
    font-family: "Popins 400 Italic";
  }

  @media (max-width: 740px) {
    /* CSS styles for mobile devices */
    .label {
      font-size: 1.75rem;
    }
    input {
      font-size: 1.25rem;
      padding: 0.75rem 1rem;
      width: 5.47rem;
    }
  }
</style>
