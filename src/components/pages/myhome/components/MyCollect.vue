<!--我的收藏切换面板-->
<template>
  <mu-drawer width="100%" :open.sync="open" :docked="docked" :right="position">
    <mu-list> 
      <mu-list-item  @click="open = false" button>
        <mu-list-item-title>Close</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
export default {

  name: 'MyCollect',

  data () {
    return {
     docked: false,
      open: false,
      position: 'right'
    }
  }
}
</script>

<style lang="css" scoped>
</style>