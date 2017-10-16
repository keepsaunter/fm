export default {
	/*播放电台
		song_info:{id,img_url,title}
	*/
	listenSong: (context, song_info) => {
		context.commit('mainMenuSelectUpdate', 'start');
		context.dispatch('getListenMusicInfo', song_info);
	},

	/*播放按钮点击*/
	startBtnClickTrigger: (context) => {
		let t_state = context.state;
		if(t_state.listeningSong.id){
			if(t_state.main_menu_selected !== 'start'){
				context.commit('mainMenuSelectUpdate', 'start');
				if(!t_state.listeningSong.is_listen)
					context.commit('updateListenState');
			}else{
				context.commit('updateListenState');
			}
		}
	}
}