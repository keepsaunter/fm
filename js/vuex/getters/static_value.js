export default {
	home_top_navigation: state => state.home_top_navigation,
	main_menu: state => state.main_menu,
	search_classify: state => state.search_classify,
	search_classify_key_val: state => {
		var temp = {};
		state.search_classify.forEach(function(val){
			temp[val.id] = val.title;
		})
		return temp;
	},
	main_menu: (state, getters) => {
		var temp = state.main_menu;
		temp[0].icon = getters.ico_home;
		temp[1].icon = getters.ico_search;
		temp[3].icon = getters.ico_mylisten;
		temp[4].icon = getters.ico_mine;
		return temp;
	}
}