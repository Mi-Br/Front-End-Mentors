<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import type Field from "./Validators.svelte";

  export let field: Field;
  export let error: string;

  const dispatch = createEventDispatcher();
  const onChange = (event) => {
    const newValue = event.target.value;
    dispatch("change", {
      value: newValue,
      type: field.type,
    });
  };

  switch (field.type) {
    case "day":
      field.placeholder = "DD";
      break;
    case "month":
      field.placeholder = "MM";
      break;
    case "year":
      field.placeholder = "YYYY";
      break;
  }
</script>

<div class="input-block">
  <label for="input" />
  <input
    type="number"
    name="input"
    bind:value={field.value}
    on:keydown={onChange}
    on:keyup={onChange}
    on:keypress={onChange}
    placeholder={field.placeholder}
  />
  {#if !field.valid}
    <div class="error">Error</div>
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
  .error {
    display: none;
  }
  input:invalid .error {
    position: relative;
    left: 5px;
    color: var(--light-red);
    font-size: 14px;
    font-family: "Popins 400 Italic";
  }
</style>
