import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		mycollect:false
	},
	mutations:{
		handleDrawer (state,flag) {
            if(flag.type==='mycollect'){
            	console.log("store:"+flag.flag);
            	state.mycollect=flag.flag;
            }
		}
	}
})