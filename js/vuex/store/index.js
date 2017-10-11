import Vue from 'vue';
import Vuex from 'vuex';
import ResourcePath from './resource_path';
import Style from './style';
import StaticValue from './static_value';
import RemoteRes from './remote_res';

import mutations from '../mutations';
import actions from '../actions';

Vue.use(Vuex);

const state = {
	main_menu_selected: StaticValue.state.main_menu[0].id,
	homepage_selected: StaticValue.state.home_top_navigation[0].id,
	listeningSong:{
		id: '',
		res_url: '',
		img_urL: '',
		bk_img_urL: '',
		title: '',
		artist: '',
		channel_name: ''
	}
}

export default new Vuex.Store({
	modules: {
		ResourcePath,
		Style,
		StaticValue,
		RemoteRes,
	},
	state,
	mutations,
	actions,
})