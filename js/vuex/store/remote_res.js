import getters from '../getters/remote_res';
import actions from '../actions/remote_res';
import mutations from '../mutations/remote_res';

// const json_bird_url = "/backstage/cross_domain.php?url";
const json_bird_url = "https://bird.ioliu.cn/v1/?url=";
const douban_channels_res = 'https://douban.fm/j/v2/rec_channels?specific=';
const state = {
	rewrite_img_url: 'http://images.weserv.nl/?url=',
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
	listen_info: {
		url: json_bird_url+'https://api.douban.com/v2/fm/playlist',
		params: {
			from: 'mainsite',
			pt: '0.0',
			kbps: 128,
			formats: 'aac',
			alt: 'json',
			app_name: 'radio_iphone',// app_name: 'radio_website',
			client: 's:mobile|y:iOS 10.2|f:115|d:b88146214e19b8a8244c9bc0e2789da68955234d|e:iPhone7,1|m:appstore',// client: 's:mainsite|y:3.0',
			apikey: '02646d3fb69a52ff072d47bf23cef8fd',
			client_id: '02646d3fb69a52ff072d47bf23cef8fd',
			icon_cate: 'xlarge',
			udid: 'b88146214e19b8a8244c9bc0e2789da68955234d',
			douban_udid: 'b635779c65b816b13b330b68921c0f8edc049590',
			version: 115,// version: 100,
			type: 'n'
		}
	},
	music_lyric_config: {
		url: json_bird_url+'https://api.douban.com/v2/fm/lyric'
	},
	search_music: {
		url: json_bird_url+'https://douban.fm/j/v2/query/',
		result_limit: 5,
		data: {}
	}
}
export default {
	state,
	getters,
	actions,
	mutations,
}