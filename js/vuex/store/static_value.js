import getters from '../getters/static_value';
import resource_path from './resource_path';
const state = {
	home_top_navigation: [
		{ title: "艺术家", id: 'artist' },
		{ title: "单曲", id: 'single' },
		{ title: "语言年代", id: 'language' },
		{ title: "风格", id: 'style' },
		{ title: "心情", id: 'mood' },
	],
	main_menu: [
		{ title: "首页", id: "home"},
		{ title: "搜索", id: "search"},
		{ title: "播放", id: "start"},
		{ title: "我听", id: "mylisten"},
		{ title: "我的", id: "mine"},
	],
	search_classify: [
		{ title: "全部", id: "all"},
		{ title: "艺术家", id: "artist"},
		{ title: "单曲", id: "song"},
		{ title: "兆赫", id: "channel"},
		{ title: "歌单", id: "songlist"},
	]
}
export default {
	state,
	getters,
}