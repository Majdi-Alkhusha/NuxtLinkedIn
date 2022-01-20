<template>
  <div class="postBox">
    <p>{{ title }}</p>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "PostBox",
  props: ["title", "desc"],
};
</script>
<style scoped>
.postBox {
  background-color: #fff;
  padding: 15;
  border: 1px solid #e0dfdb;
  border-radius: 9px;
}
</style>
