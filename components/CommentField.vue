<template>
  <div>
    <div class="contTM">
      <img
        class="persImg"
        src="https://www.w3schools.com/howto/img_avatar.png"
      />
      <div class="contText">
        <p class="username">Majdi Alkhusha</p>
        <p class="spec">Software Eng</p>
        <p class="comment">hello world for testing this code!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paper",
};
</script>
<style scoped>
.persImg {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 100%;
}
.contTM {
  margin-top: 5;
  display: flex;
}
.contText {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  background-color: #f2f2f2;
  width: 100%;
  margin-left: 10px;
  padding: 10px;
  border-radius: 7px;
}
.comment {
  font-size: 12px;
  color: #666666;
}
.spec {
  font-size: 12px;
  color: #666666;
}
.username {
  font-size: 13px;
}
</style>
