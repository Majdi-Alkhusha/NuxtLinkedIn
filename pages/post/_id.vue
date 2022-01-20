<template>
  <Layout>
    <!-- <PostBox :title="post.title" :desc="post.body" /> -->
    <p>{{ $route.query.name }}</p>
  </Layout>
</template>

<script>
export default {
  name: "PostPage",
  created() {
    console.log(this.$route.query);
    {
      this.$axios
        .$get(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.query.id}`
        )
        .then((res) => {
          console.log("hi my response", res);
          this.post = res;
        })
        .catch((error) => {
          if (this.$axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            // handle error
          }
        });
    }
  },
  mounted() {
    console.log(this.$route.query);
  },
};
</script>
