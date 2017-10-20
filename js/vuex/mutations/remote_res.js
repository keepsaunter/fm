export default {
	updateHomeArtists: (state, new_val) => {
		state.home_artists.data = new_val;
	},
	updateHomeSingle: (state, new_val) => {
		state.home_single.data = new_val;
	},
	updateHomeLanguage: (state, new_val) => {
		state.home_language.data = new_val;
	},
	updateHomeMood: (state, new_val) => {
		state.home_mood.data = new_val;
	},
	updateHomeStyle: (state, new_val) => {
		state.home_style.data = new_val;
	},
	updateSearchMusicData: (state, data) => {
		let tmp = {};
		if(Object.prototype.toString.call(data)=='[object Array]'){
			data.forEach(function(val){
				if(val.items.length > 0){
					tmp[val.type]=[];
					tmp[val.type].items = val.items;
					tmp[val.type].total= val.total;
				}
			})
		}else{
			tmp[data.type]=[];
			tmp[data.type].items = data.items;
			tmp[data.type].total = data.total;
		}
		state.search_music.data = tmp;
	},
	updateSearchMusicDataMore: (state, data) => {
		let temp = state.search_music.data;
		temp[data.type].items = temp[data.type].items.concat(data.items);
		temp[data.type].total = data.total;
		state.search_music.data = temp;
	}
}