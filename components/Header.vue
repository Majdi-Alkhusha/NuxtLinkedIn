<template>
  <div>
    <div class="contFull sm:container md:mx-auto">
      <div class="sections">
        <div>Logo</div>
        <div>
          <input type="text" placeholder="Search" class="fieldSearch" />
        </div>
      </div>
      <div class="sections">
        <div>Icon with badge</div>
        <div>Icon with badge</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.contFull {
  display: flex;
  justify-content: space-between;
}
.sections {
  display: flex;
}
.fieldSearch {
  padding: 5px; 
}
</style>