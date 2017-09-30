import Vue from 'vue';
import Vuex from 'vuex';
import ResourcePath from './resource_path';
import Style from './style';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		ResourcePath,
		Style,
	},
})