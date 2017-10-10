import axios from 'axios';
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
	}
}