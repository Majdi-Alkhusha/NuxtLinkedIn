<template>
  <div class="paper">
    <!-- <component :is="innerComponent" /> -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "Paper",
};
</script>
<style scoped>
.paper {
  background-color: #fff;
  padding: 15;
  border: 1px solid #e0dfdb;
  border-radius: 9px;
}
</style>
