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
	//豆瓣下一曲
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
	},
	getQqmusAllList: (context) => {
		let remote_config = context.state.qqmus;
		context.dispatch('fetchJsonp',{url: remote_config.url_list,callback:function(res){
			let song_list = res.songlist;
			song_list.forEach(function(val, index, arr){
				let album_id = val.albumId;
				arr[index].img_url = 'http://imgcache.qq.com/music/photo/album_300/'+album_id%100+'/300_albumpic_'+album_id+'_0.jpg';
			})
			context.commit('updateQqmusList', song_list);
		}});
	},
	//data{type:"init/more",keyword: keyword}
	getQqmusSearch: (context, data) => {
		let remote_config = context.state.qqmus;
		let res_limit = remote_config.search_res_limit;
		let page = 1;
		if(!data.type || data.type=="init"){
			context.state.qqmus.datasearch = [];
		}else{
			page = remote_config.datasearch.curpage+1;
		}
		context.dispatch('fetchJsonp',{url: remote_config.url_search,params:{
			ct:24,
			qqmusic_ver:1298,
			new_json:1,
			remoteplace:'txt.yqq.center',
			searchid:49286540795728270,
			t:0,
			aggr:1,
			cr:1,
			catZhida:1,
			lossless:0,
			flag_qc:0,
			p:page,
			n:res_limit,
			w:data.keyword,
			g_tk:5381,
			jsonpCallback:'searchCallbacksong9656',
			loginUin:0,
			hostUin:0,
			format:'jsonp',
			inCharset:'utf8',
			outCharset:'utf-8',
			notice:0,
			platform:'yqq',
			needNewCode:0,
		},funkey:'searchCallbacksong9656',callback:function(res){
			let song_list = res.data.song.list;
			song_list.forEach(function(val, index, arr){
				let album_id = val.album.id;
				arr[index].img_url = 'http://imgcache.qq.com/music/photo/album_300/'+album_id%100+'/300_albumpic_'+album_id+'_0.jpg';
			})
			context.commit('updateQqmusSearch', res.data.song);
			context.commit('updateSearchKeyword', data.keyword);
		}});
	},
	fetchJsonp: (context, config) => {
		if(config.params){
			if(config.url.indexOf('?') != -1)
				config.url+="&"+urlEncode(config.params);
			else config.url+="?"+urlEncode(config.params);
		}
		if(!config.funkey) config.funkey='JsonCallback';
        var body = document.getElementsByTagName('body')[0];
        //插入一个script
        var script = document.createElement('script');
        script.setAttribute('charset', config.charset?config.charset:'GBK');
        script.setAttribute('src',config.url);
        body.appendChild(script);
        window[config.funkey]=function(tex){
        	config.callback(tex);
        	body.removeChild(script);
        	window[config.funkey]=undefined;
        }
    },
    qqmusGetmusicLyric(context, song_id){
    	let data = {
    		method:'post',
    		url: 'http://music.qq.com/miniportal/static/lyric/'+song_id%100+'/'+song_id+'.xml',
    		charset: 'gbk'
    	};
    	axios.post('backstage/cross_domain.php',urlEncode(data))
			.then(function(res){
				context.commit('updateListeningLyric', res.data);
			}
		)
    }
}