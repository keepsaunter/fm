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
	}
}