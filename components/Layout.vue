<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>
<style scoped>
.layout {
  background-color: #f3f2ee;
}
</style>
