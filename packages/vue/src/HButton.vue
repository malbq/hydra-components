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

<style>
.h-button {
  background: #ffffff;
  border: 2px solid #00C58E;
  border-radius: 4px;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #35495e;
}
</style>
