<script lang="ts">
  import "./app.css";
  import Input from "./lib/Input.svelte";
  let day: number = 0;
  let months: number = 0;
  let years: number = 0;
</script>

<main>
  <div class="container">
    <div class="date-selector">
      <Input />
      <Input />
      <Input />
    </div>
    <div class="line" />
    <div class="year" />
    <div class="months" />
    <div class="days" />
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
  .date-selector {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
</style>
