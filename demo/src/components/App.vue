<style lang='less'>
body{height:2000px;}
.main-content {
  margin: 30px;
  .router-link-active{
    background:green;
    border:0;
  }
}
</style>

<template>
  <div class="main-content">
    <router-link to="home" style="outline:0" class="btn btn-primary">home</router-link>&emsp;
    <router-link to="page1" style="outline:0" class="btn btn-primary">page1</router-link>&emsp;
    <router-link to="page2" style="outline:0" class="btn btn-primary">page2</router-link>&emsp;
    <router-link to="page3" style="outline:0" class="btn btn-primary">page3</router-link>&emsp;
    <router-link to="whatever" style="outline:0" class="btn btn-primary">404</router-link><hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
//scroll bar style
$("body").niceScroll({
  cursorwidth:"5px",
  cursorcolor: "#788087",
  railalign: "right", 
  railvalign:"borrom",
  cursorborder:"1px solid #fff",
  cursorborderradius:"5px",
  background:"",
  boxzoom: true,
  scrollspeed:60,
}); 
</script>
