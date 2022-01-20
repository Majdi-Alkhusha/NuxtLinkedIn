<template>
  <div class="md:container md:mx-auto">
    <div class="grid grid-cols-4 gap-4">
      <div>
        <Paper> Profile Show </Paper>
      </div>
      <div class="col-span-2">
        <div v-for="post in posts" :key="post.id">
          <!-- <NuxtLink to="{name: 'post', params: { id:post.id } }">
            <PostBox :title="post.title" :desc="post.body" />
          </NuxtLink> -->
          <NuxtLink :to="`/post/${post.id}`">
            <PostBox :title="post.title" :desc="post.body" />
          </NuxtLink>
        </div>
      </div>
      <div>
        <Paper> News</Paper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  //   async fetch() {
  //     this.articles = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     ).then((res) => res.json());
  //   },

  //   methods: {
  //     fetchData: function () {
  //       this.$axios
  //         .$get("https://jsonplaceholder.typicode.com/posts")
  //         .then((res) => {
  //           console.log("hi my response", res);
  //         })
  //         .catch((error) => {
  //           if (this.$axios.isCancel(error)) {
  //             console.log("Request canceled", error);
  //           } else {
  //             // handle error
  //           }
  //         });
  //     },
  //   },

  created() {
    // fetchData();
    {
      this.$axios
        .$get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          this.posts = res;
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
};
</script>
