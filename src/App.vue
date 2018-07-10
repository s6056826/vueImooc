<template>
  <div id="app">
    <router-view/>
    <common-foot></common-foot>
  </div>
</template>

<script>
  import CommonFoot from "@/components/pages/common/CommonFoot"
export default {
  name: 'App',
  components:{
    CommonFoot
  }
}
</script>

<style>
 #app >>> a{
  color: #ffffff;
 }
</style>
