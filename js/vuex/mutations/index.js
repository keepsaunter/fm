import { rewriteImgUrl } from '../../lib';
export default {
	homeSelectUpdate: (state, val) => {
		state.homepage_selected = val;
	},
	mainMenuSelectUpdate: (state, val) => {
		state.main_menu_selected = val;
	},
	updateListening: (state, val) => {
		let bk_img_url = rewriteImgUrl(val.picture);

		let img= document.createElement('img');
		img.src = bk_img_url;

		state.listeningSong = {
			id: val.id,
			res_url: val.url,
			img_url: val.img_url,
			bk_img_url: bk_img_url,
			title: val.title,
			artist: val.artist,
			channel_name: val.channel_name,
			current_time: 0,
			duration: 0,
			lyric: '',
			is_listen: true,
		}
	},
	/*更新歌词，为多个音频来源做准备*/
	updateListeningLyric: (state, val) => {
		state.listeningSong.lyric = val;
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
	},
	updateSearchSelect: (state, id) => {
		if(state.search_state.select != id)
			state.search_state.select = id;
	},
	updateSearchKeyword: (state, words) => {
		let tmp = state.search_state.keywords;
		let index = tmp.indexOf(words);
		if(index != -1){
			tmp.splice(index, 1);
			tmp.unshift(words);
		}else{
			tmp.push(words);
		}
		state.search_state.keywords = tmp;
	},
}