export default {
	homeSelectUpdate: (state, val) => {
		state.homepage_selected = val;
	},
	mainMenuSelectUpdate: (state, val) => {
		state.main_menu_selected = val;
	},
	updateListening: (state, val) => {
		console.log(val);
		state.listeningSong = {
			id: val.id,
			res_url: val.url,
			img_url: val.img_url,
			bk_img_url: val.picture,
			title: val.title,
			artist: val.artist,
			channel_name: val.channel_name,
			current_time: 0,
			duration: 0,
			is_listen: true,
		}
		console.log(state.listeningSong);
	},
	updateListenDuration: (state, val) => {
		if(state.listeningSong.duration === 0 && val)
			state.listeningSong.duration = val;
	},
	updateListenCurrentTime: (state, val) => {
		state.listeningSong.current_time = val;
	},
	updateListenState: (state, val) => {
		if(!val){
			state.listeningSong.is_listen = !(state.listeningSong.is_listen);
		}else{
			if(state.listeningSong.is_listen !== val)
				state.listeningSong.is_listen = val;
		}
	}
}