import axios from 'axios';
import { urlEncode } from '../../lib';
export default {
	/*播放电台
		song_info:{id,img_url,title}
	*/
	listenSong: (context, song_info) => {
		let data = {
			channel: song_info.id,
			kbps:128,
			client: 's:mainsite|y:3.0',
			app_name: 'radio_website',
			version: 100,
			type: 'n'
		}
		axios.get(context.getters.listen_info_url+"?"+urlEncode(data))
			.then(function(res){
				console.log(res);
			})
	}
}