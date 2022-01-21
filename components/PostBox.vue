<template>
  <div class="postBox">
    <div class="dots">
      <p>000</p>
    </div>
    <NuxtLink :to="urlTo">
      <div class="contTM">
        <img
          class="persImg"
          src="https://www.w3schools.com/howto/img_avatar.png"
        />
        <div class="contText">
          <p class="username">Majdi Alkhusha</p>
          <p class="spec">Software Eng</p>
          <p class="time">5h</p>
        </div>
      </div>
      <p>{{ title }}</p>
      <p>{{ desc }}</p>
    </NuxtLink>
    <p class="comments-count">7 comments</p>
    <hr />
    <div class="btnsGroup">
      <p>Like</p>
      <p>Comment</p>
      <p>Share</p>
      <p>Send</p>
    </div>
    <CommentField />
  </div>
</template>

<script>
export default {
  name: "PostBox",
  props: ["urlTo", "title", "desc"],
};
</script>
<style scoped>
.dots {
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #e4e7eb;
  margin-bottom: 15px;
}
.comments-count {
  width: 100%;
  text-align: right;
  font-size: 12px;
  color: #666666;
}
.btnsGroup {
  display: flex;
  justify-content: space-around;
}
.btnsGroup p {
  padding: 10px;
  color: #737373;
  cursor: pointer;
  width: 25%;
  text-align: center;
  transition: 0.3s;
}
.btnsGroup p:hover {
  background-color: gray;
  color: #fff;
}
.contTM {
  margin-top: 5;
  display: flex;
}
.contText {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
}
.time {
  font-size: 10px;
  color: #666666;
}
.spec {
  font-size: 12px;
  color: #666666;
}
.username {
  font-size: 13px;
}
.postBox {
  background-color: #fff;
  padding: 15px;
  border: 1px solid #e0dfdb;
  border-radius: 9px;
  margin-bottom: 15px;
}
.persImg {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 100%;
}
</style>
