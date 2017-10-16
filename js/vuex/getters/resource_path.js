export default {
	'ico_home': (state, getters) => getters.main_menu_selected==='home'?state.ico_home_select:state.ico_home,
	'ico_search': (state, getters) => getters.main_menu_selected==='search'?state.ico_search_select:state.ico_search,
	'ico_mylisten': (state, getters) => getters.main_menu_selected==='mylisten'?state.ico_mylisten_select:state.ico_mylisten,
	'ico_mine': (state, getters) => getters.main_menu_selected==='mine'?state.ico_mine_select:state.ico_mine,
	'ico_left_arrow': state => state.ico_left_arrow,
	'ico_list': state => state.ico_list,
	'ico_previous': state => state.ico_previous,
	'ico_next': state => state.ico_next,
	'ico_trumpet': state => state.ico_trumpet,
	'img_earphone': state => state.img_earphone,
	'img_music': state => state.img_music,
	'img_listen_bk': state => state.img_listen_bk,
}