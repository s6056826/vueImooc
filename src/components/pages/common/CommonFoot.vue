<template>
  <mu-bottom-nav  class="foot">
  		 	 <mu-bottom-nav-item to="/" title="首页" icon="home"></mu-bottom-nav-item>
  		 	 <mu-bottom-nav-item title="发布" icon="add"></mu-bottom-nav-item>
  		 	 <mu-bottom-nav-item  to="/myhome" title="我的" icon="account_circle"></mu-bottom-nav-item>
  </mu-bottom-nav>
</template>

<script>
export default {

  name: 'CommonFoot',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.foot{
	position: absolute;
	bottom: 0px;
	left: 0px;
	text-align: center;
	width: 100%;
}
</style>