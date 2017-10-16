import axios from 'axios';
import { urlEncode } from '../../lib';
export default {
	getHomeArtists: context => {
		if(context.state.home_artists.data.length) return;
		axios.get(context.state.home_artists.url)
			.then(function(res){
				context.commit('updateHomeArtists', res.data.data.channels);
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
				// console.log(song_info);
				// console.log(data);
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
			}
		)
	}
}