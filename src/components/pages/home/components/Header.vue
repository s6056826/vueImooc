<template>
<div class="header">
    <mu-row class="header-top">
      <mu-col span="1"> <router-link to="/home"><span class="iconfont hicon">&#xe643;</span></router-link> </mu-col>
      <mu-col span="10"> <div class="hitem"><input class="hinput" type="text" name="search" placeholder="java springboot 算法">
        </div>
      </mu-col>
      <mu-col span="1"><router-link to="/home"><span class="iconfont hicon">&#xe741;</span></router-link></mu-col>

  </mu-row>
  <mu-row>
    <mu-tabs :value.sync="active1" class="header-two" color="#fff" center  >
    <mu-tab active-class="link"><span>推荐</span></mu-tab>
    <mu-tab active-class="link" ><span>课程</span></mu-tab>
    <mu-tab active-class="link" ><span>路径</span></mu-tab>
    <mu-tab active-class="link" ><span>实战</span></mu-tab>
  </mu-tabs>
  </mu-row>   
</div>
</template>

<script>
export default {

  name: 'HomeHeader',

  data () {
    return {
        active1:0,
        flag:false     
    }
   },
    methods: {
      click1 () {
        console.log("click1");
      }
    },
    watch: {
        active1 (value,oldVal){
         this.$emit("tapChange",value);
      }
    }
  }
</script>

<style lang="css" scoped>
.header{
  width: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 9999999;
}
.header-top{
  padding: 5px 0px;
  background-color: #ff4545;
}
.header-two{
  color: black;
  font-weight: bold;
}
.hicon{
  font-size: 35px;
  color: white;
}
.hinput{
  border-radius:6px;
  height:30px;
  text-align: center;
  width:100%;

}
.hitem{
padding: 0 5px;
}
.link{
  color: #ff4545;
}
.header >>> .mu-tab-active{
color: #ff4545;
}
</style>