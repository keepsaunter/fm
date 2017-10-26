import axios from 'axios';
import { urlEncode } from '../../lib';
import binlyric from '../../binlyric';
export default {
	getHomeList: (context, type) => {
		axios.get(context.state['home_'+type].url)
			.then(function(res){
				context.commit('updateHome'+type[0].toUpperCase()+type.slice(1), res.data.data.channels);
			})
	},
	getListenMusicInfo: (context, song_info) => {
		let listen_info_cofig = context.getters.listen_info;
		axios.get(listen_info_cofig.url+"&channel="+song_info.id+"&"+urlEncode(listen_info_cofig.params))
			.then(function(res){
				let data = res.data.song[0];
				context.commit('updateListening', Object.assign({}, song_info, data));
				context.dispatch('getMusicLyric', {sid: data.sid, ssid: data.ssid})
			}
		)
	},
	getMusicLyric: (context, song_info) => {
		let music_lyric_config = context.getters.music_lyric_config
		axios.get(music_lyric_config.url+"&sid="+song_info.sid+"&"+'ssid='+song_info.ssid)
			.then(function(res){
				context.commit('updateListeningLyric', res.data.lyric);
				// console.log(res.data.lyric);
				// binlyric.txt = res.data.lyric;
				// console.log(binlyric.analysis());
			}
		)
	},
	searchMusic: (context, words) => {
		let search_music = context.state.search_music;
		let search_state = context.getters.search_state;
		axios.get(search_music.url+"all?q="+words+"&start=0&limit="+search_music.result_limit)
			.then(function(res){
				context.commit('updateSearchMusicData', res.data);
				context.commit('updateSearchKeyword', words);
			}
		)
	},
	searchMusicMore: (context, type) => {
		let search_music = context.state.search_music;
		let search_state = context.getters.search_state;
		axios.get(search_music.url+type+"?q="+search_state.keywords[0]+"&start="+search_music.data[type].items.length+"&limit="+search_music.result_limit)
			.then(function(res){
				let data = res.data;
				context.commit('updateSearchMusicDataMore', data);
			}
		)
	},
	getNextListen: (context) => {
		let listen_info_cofig = context.getters.listen_info;
		let listening_song = context.rootState.listeningSong;
		let channel = listening_song.id;
		let sid = listening_song.sid;

		let params = listen_info_cofig.params;
		params.channel = channel;
		params.sid = sid;

		axios.get(listen_info_cofig.url+"&"+urlEncode(params))
			.then(function(res){
				let data = res.data.song[0];
				context.commit('updateListening', data);
				context.dispatch('getMusicLyric', {sid: data.sid, ssid: data.ssid})
			}
		)
	}
}