<template>

	<mu-row>
		<div ref="homebody" class="wrapper">
			<div class="content">
			 <div  class="demo-text" v-if="active1 === 0||active1===null">
                            <mu-carousel class="tap0-img" hide-controls>
  <mu-carousel-item>
    <img src="https://img1.mukewang.com/szimg/5b31a14e0001551d09000300.jpg">
  </mu-carousel-item>
  <mu-carousel-item>
    <img src="https://img4.mukewang.com/szimg/5b42c42f0001b3de09000300.jpg">
  </mu-carousel-item>
  <mu-carousel-item>
    <img src="https://img2.mukewang.com/szimg/5b3ecc1d0001431809000300.jpg">
  </mu-carousel-item>
  <mu-carousel-item>
    <img src="https://img4.mukewang.com/szimg/5b3ae7fc000173f509000300.jpg">
  </mu-carousel-item>
               </mu-carousel>
               <div class="box">
               	<mu-list>
               	  <mu-list-item open nested button :ripple="false">
           <mu-list-item-title>实战推荐</mu-list-item-title>
           <mu-list-item-action>
           <mu-icon value="send"></mu-icon>
            </mu-list-item-action>
                  </mu-list-item>
             </mu-list>
             <div class="box-img">
             	<div class="big-card l cd" style="box-shadow: 0 4px 16px 0 #41b883;background: #41b883 ">
	<a href="http://coding.m.imooc.com/classindex.html?cid=203">
		<h2>Vue.js</h2>
		<p class="big-card-title"> Vue2.5开发去哪儿网App 从零基础入门到实战项目</p>
		<div class="big-card-bottom">
			¥266.00
			<span class="number"><i class="imwap-peaple"></i>2056</span>
		</div>
	</a>
</div>
           	<div class="big-card l cd" style="box-shadow: 0 4px 16px 0 #41b883;background: #41b883 url(//img1.mukewang.com/5b1746400001ab5a02400240.jpg) no-repeat right;">
	<a href="http://coding.m.imooc.com/classindex.html?cid=203">
		<h2>Vue.js</h2>
		<p class="big-card-title"> Vue2.5开发去哪儿网App 从零基础入门到实战项目</p>
		<div class="big-card-bottom">
			¥266.00
			<span class="number"><i class="imwap-peaple"></i>2056</span>
		</div>
	</a>
</div>
             </div>
             <div class="box-list border-bottom">
             	   <mu-carousel :cycle="false"  class="box-list-swiper" hide-controls>
                    <mu-carousel-item>
                    		<div class="box-list-item">
             		<a href="">
             			<img width="113px" height="76px" src="https://img1.sycdn.imooc.com/szimg/5b3f2c890001d1b305400300-360-202.jpg">
             		</a>
                    <div class="item-content border-bottom">
                    	<p>
                    		<h2>原理+实战 快速掌握响应式开发精髓</h2>
                    		<span style="color: #71777D;font-size: 12px;">积分：333</span><br>
                    		<span>人气:1020</span>
                    	</p>
                    </div>
             	</div>
             			<div class="box-list-item">
             		<a href="">
             			<img width="113px" height="76px" src="https://img1.sycdn.imooc.com/szimg/5b3f2c890001d1b305400300-360-202.jpg">
             		</a>
                    <div class="item-content border-bottom">
                    	<p>
                    		<h2>原理+实战 快速掌握响应式开发精髓</h2>
                    		<span style="color: #71777D;font-size: 12px;">积分：333</span><br>
                    		<span>人气:1020</span>
                    	</p>
                    </div>
             	</div>
             			<div class="box-list-item">
             		<a href="">
             			<img width="113px" height="76px" src="https://img1.sycdn.imooc.com/szimg/5b3f2c890001d1b305400300-360-202.jpg">
             		</a>
                    <div class="item-content border-bottom">
                    	<p>
                    		<h2>原理+实战 快速掌握响应式开发精髓</h2>
                    		<span style="color: #71777D;font-size: 12px;">积分：333</span><br>
                    		<span>人气:1020</span>
                    	</p>
                    </div>
             	</div>
                    </mu-carousel-item>
                    <mu-carousel-item>
                    	 		<div class="box-list-item">
             		<a href="">
             			<img width="113px" height="76px" src="https://img1.sycdn.imooc.com/szimg/5b3f2c890001d1b305400300-360-202.jpg">
             		</a>
                    <div class="item-content border-bottom">
                    	<p>
                    		<h2>原理+实战 快速掌握响应式开发精髓</h2>
                    		<span style="color: #71777D;font-size: 12px;">积分：333</span><br>
                    		<span>人气:1020</span>
                    	</p>
                    </div>
             	</div>
                     </mu-carousel-item>
                   </mu-carousel>
             </div>
               </div>
                              <div class="box">
               	<mu-list>
               	  <mu-list-item open nested button :ripple="false">
           <mu-list-item-title>实战推荐</mu-list-item-title>
           <mu-list-item-action>
           <mu-icon value="send"></mu-icon>
            </mu-list-item-action>
                  </mu-list-item>
             </mu-list>
             <div class="box-img">
             	<div class="big-card l cd" style="box-shadow: 0 4px 16px 0 #41b883;background: #41b883 ">
	<a href="http://coding.m.imooc.com/classindex.html?cid=203">
		<h2>Vue.js</h2>
		<p class="big-card-title"> Vue2.5开发去哪儿网App 从零基础入门到实战项目</p>
		<div class="big-card-bottom">
			¥266.00
			<span class="number"><i class="imwap-peaple"></i>2056</span>
		</div>
	</a>
</div>
           	<div class="big-card l cd" style="box-shadow: 0 4px 16px 0 #41b883;background: #41b883 url(//img1.mukewang.com/5b1746400001ab5a02400240.jpg) no-repeat right;">
	<a href="http://coding.m.imooc.com/classindex.html?cid=203">
		<h2>Vue.js</h2>
		<p class="big-card-title"> Vue2.5开发去哪儿网App 从零基础入门到实战项目</p>
		<div class="big-card-bottom">
			¥266.00
			<span class="number"><i class="imwap-peaple"></i>2056</span>
		</div>
	</a>
</div>
             </div>
             <div class="box-list border-bottom">
             	<div class="box-list-item">
             		<a href="">
             			<img width="113px" height="76px" src="https://img1.sycdn.imooc.com/szimg/5b3f2c890001d1b305400300-360-202.jpg">
             		</a>
                    <div class="item-content border-bottom">
                    	<p>
                    		<h2>原理+实战 快速掌握响应式开发精髓</h2>
                    		<span style="color: #71777D;font-size: 12px;">积分：333</span><br>
                    		<span>人气:1020</span>
                    	</p>
                    </div>
             	</div>
             		<div class="box-list-item">
             		<a href="">
             			<img width="113px" height="76px" src="https://img1.sycdn.imooc.com/szimg/5b3f2c890001d1b305400300-360-202.jpg">
             		</a>
                    <div class="item-content border-bottom">
                    	<p>
                    		<h2>原理+实战 快速掌握响应式开发精髓</h2>
                    		<span style="color: #71777D;font-size: 12px;">积分：333</span><br>
                    		<span>人气:1020</span>
                    	</p>
                    </div>
             	</div>
             </div>
               </div>
     </div>
       <div class="demo-text" v-if="active1 === 1">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
    <p>“也许吧，未来……给你了1`1212。”</p>

  </div>
  <div class="demo-text" v-if="active1 === 2">
    <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
    <p>“也许吧，未来……给你了。”</p>
  </div>
   <div class="demo-text" v-if="active1 ===3">
hahahah
  </div>



  </div>
  </div>
	</mu-row>

</template>

<script>
	import Test from "@/components/pages/test"
export default {

  name: 'HomeBody',
  props:['active1'],
  components:{
    Test
  },
  data () {
    return {
      // refreshing: false,
      // loading: false
      color:"#41b883"
    }
  },
  mounted () {
  }
}
</script>

<style lang="css" scoped>
.wrapper{
overflow: scroll;
position: absolute;
bottom: 60px;
top: 97px;
left: 0px;
width:100%;
}
.content{
  height:100%;
}

.tap0-img{
  width:100%;
  height:0;
  padding-bottom: 32%;
}
.tap0-img img{
  width:100%;
}
.big-card {
    font-size: 11px;
    line-height: .42666667rem;
    width: 4.26666667rem;
    /* height: 2.88rem;*/
    margin-right: .4rem;
    padding: .37333333rem;
    padding-top: 0.373333rem;
    padding-top: .42666667rem;
    box-sizing: border-box; 
    border-radius: .10666667rem;
    background-size: 1.92rem !important;
    box-shadow: 0 4px 16px 0 rgba(7,17,27,.15);
    background-position-y: 1.70666667rem !important;
    width:50%;
    margin-left: 10px;
}
.box-img{
	width:100%;
	display: flex;
}
a{
	color: #fff;
}
h2{
	font-size: 15px;
}
.box-list{
width:100%;
padding-left: 10px;
margin-top: 40px;
}
.box-list-item{
	margin: 15px auto;
	display: flex;
}
.item-content{
	padding: 2px 15px;
	line-height: 18px;
}
.box-list-item img{
border-radius: .08rem;
}
.box-list-swiper{
  width:100%;
/*  height:0px;*/
/*  padding-bottom: 80%;*/
max-height: 300px;
}
.box{
	background-color: #f7f7f7;
}
</style>