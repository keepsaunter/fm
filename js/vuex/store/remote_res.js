import getters from '../getters/remote_res';
import actions from '../actions/remote_res';
import mutations from '../mutations/remote_res';

const json_bird_url = "https://bird.ioliu.cn/v1/?url=";
const douban_channels_res = 'https://douban.fm/j/v2/rec_channels?specific=';
const state = {
	home_artists: {
		url: json_bird_url+douban_channels_res+'artist',
		data: [],
	},
	home_single: {
		url: json_bird_url+douban_channels_res+'track',
		data: [],
	},
	home_language: {
		url: json_bird_url+douban_channels_res+'language',
		data: [],
	},
	home_mood: {
		url: json_bird_url+douban_channels_res+'scenario',
		data: [],
	},
	home_style: {
		url: json_bird_url+douban_channels_res+'genre',
		data: [],
	},
	listen_info_url: json_bird_url+'https://douban.fm/j/v2/playlist',
}
export default {
	state,
	getters,
	actions,
	mutations,
}