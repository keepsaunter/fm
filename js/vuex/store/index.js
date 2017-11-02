import Vue from 'vue';
import Vuex from 'vuex';
import ResourcePath from './resource_path';
import Style from './style';
import StaticValue from './static_value';
import RemoteRes from './remote_res';

import mutations from '../mutations';
import actions from '../actions';
import getters from '../getters';

Vue.use(Vuex);

const state = {
	main_menu_selected: StaticValue.state.main_menu[0].id,
	main_menu_selected_pre: StaticValue.state.main_menu[0].id,
	homepage_selected: StaticValue.state.home_top_navigation[0].id,
	listeningSong:{
		id: '',
		sid: '',
		res_url: '',
		img_url: ResourcePath.state.img_earphone,
		bk_img_url: '',
		title: '',
		artist: '',
		channel_name: '',
		current_time: 0,
		duration: 0,
		lyric: '',
		is_listen: false,
	},
	search_state: {
		select: StaticValue.state.search_classify[0].id,
		keywords: [],
	},
	play_volume: 0.5,
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
	getters,
})