<template>
  <Layout>
    <div class="sm:container md:mx-auto">
      <Posts />
    </div>
    <div class="messages">Messages</div>
  </Layout>
</template>

<script>
export default {
  name: "IndexPage",
  beforeMount(props) {
    console.log("hi majdi???", props);
    console.log("majdi", this.$route.params.yourParam);
    console.log("hi majdi", this.$route);
  },
};
</script>
<style scoped>
.messages {
  position: sticky;
  bottom: 0;
  left: 100%;
  padding: 10px;
  background-color: #fff;
  width: 250px;
}
</style>
