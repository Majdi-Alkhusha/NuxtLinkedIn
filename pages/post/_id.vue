<template>
  <Layout>
    <Tutorial />
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
