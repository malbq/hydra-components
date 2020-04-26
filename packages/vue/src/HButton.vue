<template>
  <button class="h-button" type="button" >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'HButton',
}
</script>

<style src="@hydra/tokens/src/tokens.css">
</style>
<style>
.h-button {
  font-size: var(--font-size);
  color: var(--ink-color);
  background: #ffffff;
  padding: var(--size-xs) var(--size-m);
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
