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
  background: #ffffff;
  border: 2px solid var(--primaryColor);
  border-radius: 4px;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primaryColor);
}
</style>
