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
	getHomeArtist: context => {
		if(context.state.home_artist.data.length) return;
		axios.get(context.state.home_artist.url)
			.then(function(res){
				context.commit('updateHomeArtist', res.data.data.channels);
			})
	},
	getHomeSingle: context => {
		if(context.state.home_single.data.length) return;
		axios.get(context.state.home_single.url)
			.then(function(res){
				context.commit('updateHomeSingle', res.data.data.channels);
			})
	},
	getHomeLanguage: context => {
		if(context.state.home_language.data.length) return;
		axios.get(context.state.home_language.url)
			.then(function(res){
				context.commit('updateHomeLanguage', res.data.data.channels);
			})
	},
	getHomeMood: context => {
		if(context.state.home_mood.data.length) return;
		axios.get(context.state.home_mood.url)
			.then(function(res){
				context.commit('updateHomeMood', res.data.data.channels);
			})
	},
	getHomeStyle: context => {
		if(context.state.home_style.data.length) return;
		axios.get(context.state.home_style.url)
			.then(function(res){
				context.commit('updateHomeStyle', res.data.data.channels);
			})
	},
	getListenMusicInfo: (context, song_info) => {
		console.log(context);
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
				console.log(res);
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
		// axios.get(search_music.url+search_state.select+"?q="+words+"&start=0&limit="+search_music.result_limit)
		axios.get(search_music.url+"all?q="+words+"&start=0&limit="+search_music.result_limit)
			.then(function(res){
				console.log(res);
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
				console.log(res);
				let data = res.data;
				context.commit('updateSearchMusicDataMore', data);
			}
		)
	}
}