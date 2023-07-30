<script>
</script>

<div class="input-block">
  <label for="input">asdasd</label>
  <input name="input" />
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
</style>
