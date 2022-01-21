<template>
  <Layout>
    <!-- <PostBox :title="post.title" :desc="post.body" /> -->
    <!-- <p>{{ $route.query.name }}</p> -->
  </Layout>
</template>

<script>
export default {
  name: "PostPage",
  created(props) {
    console.log("my ptopr", props);
  },
  data() {
    return {
      post: {},
    };
  },
  async asyncData({ params }) {
    console.log("hi params", params);
    /* this.$axios
      .$get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
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
      }); */
  },
  mounted(params) {
    console.log(params);
    console.log(this.$route.query);
  },
};
</script>
