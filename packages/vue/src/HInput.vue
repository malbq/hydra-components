<template>
  <input class="h-input" type="text" />
</template>

<script>
export default {
  name: 'HInput',
}
</script>

<style src="@hydra/tokens/src/tokens.css">
</style>
<style>
.h-input {
  font-size: var(--font-size);
  color: var(--ink-color);
  background: #ffffff;
  padding: var(--size-xs) var(--size-s);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.h-input:focus {
  outline: none;
  box-shadow: inset 0 0 3px var(--secondary-color);
}
</style>
