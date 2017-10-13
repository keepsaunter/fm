import axios from 'axios';
import { urlEncode } from '../../lib';
export default {
	/*播放电台
		song_info:{id,img_url,title}
	*/
	listenSong: (context, song_info) => {
		context.commit('mainMenuSelectUpdate', 'start');
		let listen_info_cofig = context.getters.listen_info;
		axios.get(listen_info_cofig.url+"&channel="+song_info.id+"&"+urlEncode(listen_info_cofig.params))
			.then(function(res){
				context.commit('updateListening', Object.assign({}, song_info,res.data.song[0]));
			}
		)
	},
	startBtnClickTrigger: (context) => {
		console.log(context);
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