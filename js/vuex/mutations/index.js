export default {
	homeSelectUpdate: (state, val) => {
		state.homepage_selected = val;
	},
	mainMenuSelectUpdate: (state, val) =>{
		state.main_menu_selected = val;
	},
	updateListening: (state, val) => {
		state.listeningSong = {
			id: val.id,
			res_url: val.url,
			img_url: val.img_url,
			bk_img_url: val.picture,
			title: val.title,
			artist: val.artist,
			channel_name: val.channel_name,
		}
		console.log(state.listeningSong);
	}
}