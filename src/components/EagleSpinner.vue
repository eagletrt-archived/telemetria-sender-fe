<template>
  <img src="logo.png" class="spinner" />
</template>

<script>
export default {
  name: "EagleSpinner"
};
</script>

<style scope>
img.spinner {
  width: 200px;
  height: 200px;
  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 100%;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>