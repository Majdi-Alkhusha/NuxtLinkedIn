<template>
  <div class="md:container md:mx-auto">
    <div class="grid grid-cols-4 gap-4">
      <div>
        <Paper>
          <Recent />
        </Paper>
      </div>
      <div class="col-span-2">
        <div v-for="post in posts" :key="post.id">
          <!-- <NuxtLink to="{name: 'post', params: { id:post.id } }">
            <PostBox :title="post.title" :desc="post.body" />
          </NuxtLink> -->

          <PostBox
            :urlTo="`/post/${post.id}`"
            :title="post.title"
            :desc="post.body"
          />
        </div>
      </div>
      <div>
        <Paper>
          <div class="box">
            Box 1
            <button class="btn-must-custom">Not custom!</button>
          </div>
        </Paper>
        <Paper>
          <div class="box">
            Box 2
            <button class="btn-must-custom">Following</button>
          </div>
        </Paper>
        <Paper>
          <div class="box">
            Box 3
            <button class="btn-must-custom">Following</button>
          </div>
        </Paper>
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

<style>
.btn-must-custom {
  padding: 10px;
  border: 1px solid #878585;
  border-radius: 30px;
  width: 150px;
  color: #878585;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
</style>