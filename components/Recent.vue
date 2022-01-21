<template>
  <div>
    <div class="recent">
      <p>Recent</p>
      <div class="b-text">
        <p>Recent</p>
        <p>Recent</p>
        <p>Recent</p>
      </div>
    </div>
    <div class="recent">
      <p>Groups</p>
      <div class="b-text">
        <p>Front-end developer</p>
        <p>Front-end developer</p>
        <p>Front-end developer</p>
      </div>
    </div>
    <div class="discover">Discover more</div>
  </div>
</template>

<script>
export default {
  name: "Recent",
};
</script>
<style scoped>
.b-text {
  margin-left: 5px;
}
.recent {
  padding: 15px;
}
.discover {
  border-top: 1px solid black;
  text-align: center;
  padding: 10px;
}
</style>
