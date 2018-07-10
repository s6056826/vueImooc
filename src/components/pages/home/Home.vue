<template>
	<div class="home">
		<home-header @tapChange="handelTapChange"></home-header>
		<home-body :active1="tapValue"></home-body>
		<!-- <home-foot></home-foot> -->
	</div>
</template>

<script>

import HomeHeader from "./components/Header"
import HomeBody from "./components/HomeBody"
// import HomeFoot from "./components/Footer"
export default {

  name: 'Home',
  components:{
  	HomeHeader,
  	HomeBody
  },
  data () {
    return {
      tapValue:0
    }
  },
  methods: {
    handelTapChange (value) {
       this.tapValue=value;
    }
  }
}
</script>

<style lang="css" scoped>

</style>