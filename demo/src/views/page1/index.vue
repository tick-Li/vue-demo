<template>
  <div>
    page1
    <router-link to="/page1/hello">/page1/hello</router-link>&emsp;
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'page'
}
</script>
