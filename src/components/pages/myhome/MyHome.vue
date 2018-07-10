<template>
	<div class="myhome_body">
	<mu-list>
		<mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img src="https://img3.mukewang.com/5333a1920001d36402200220-370-370.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>点击登录</mu-list-item-title>
    </mu-list-item>
    <mu-divider></mu-divider>
	</mu-list>
	 		<mu-row class="myicon" >
    			 <mu-col class="my_icon" span="3">
    			 	<router-link   to="#">
    			 	<p @click="handleDrawer('mycollect')" style="text-align: center;">
    			 		 <mu-icon :size="29" color="#14b4ff" value="star"></mu-icon>
    			 		 <br>
    			 		 我的收藏
    			 	</p>
    			 	</router-link>
    			 </mu-col>
    			 <mu-col class="my_icon" span="3">
    			 	<router-link to="/">
                  	<p style="text-align: center;">
    			 		 <mu-icon :size="29" color="#ffa01e" value="tab"></mu-icon>
    			 		 <br>
    			 		 我的发布
    			 	</p>  
    			    </router-link>
    			 </mu-col>
    			 <mu-col class="my_icon" span="3">
    			 	<router-link to="/">
    			 		<p style="text-align: center;">
    			 		 <mu-icon :size="29" color="#14b4ff" value="system_update_tv"></mu-icon>
    			 		 <br>
    			 		 已购课程
    			 	</p>
    			 	</router-link>
    			 </mu-col>
    			 <mu-col class="my_icon" span="3">
    			 	<router-link to="/">
    			 		<p style="text-align: center;">
    			 		 <mu-icon :size="29" color="#20cc85" value="payment"></mu-icon>
    			 		 <br>
    			 		 我的钱包
    			 	</p>
    			 	</router-link>
    			 </mu-col>
    		</mu-row>
    		<div class="myhome_hr"></div>
    		<div class="myhome_set">
    			<mu-list>  
                     <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                        <mu-icon value="description"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>我的订单</mu-list-item-title>
                      </mu-list-item>
                      <mu-divider shallow-inset></mu-divider>
                      <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                        <mu-icon value="shopping_cart"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>购物车</mu-list-item-title>
                      </mu-list-item>
                      <mu-divider shallow-inset></mu-divider>
                      <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                        <mu-icon value="settings"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>个人信息</mu-list-item-title>
                      </mu-list-item>
    			</mu-list>
    		</div>
    		<div class="myhome-drawer">
                    <my-collect></my-collect>
    		</div>
    		  
    		  <div class="myhome-logout-btn" style="padding: 50px 30px">
    		  	<mu-button full-width large color="error">退出登录</mu-button>
    		  </div>
    	         
	</div>
</template>

<script>
import MyCollect from "./components/MyCollect"
export default {

  name: 'MyHome',
  components:{
  	MyCollect
  },
  data () {
    return {
    }
   } ,
    methods: {
      handleDrawer (res) {
      	console.log(res);
      	 this.$store.commit("handleDrawer",{type:res,flag:true})
      }
    }
  }
</script>

<style lang="css" scoped>
.myhome_body{
	background-color: #ffffff;
}
.myhome_hr{
	height:16px;
	background-color: #f7f7f7;
}
.myhome_set{
	margin-top: 20px;
}
.myicon{
	padding-bottom: 12px;
}
</style>