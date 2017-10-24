import remote_res_store from './vuex/store/remote_res';
export function urlEncode(params){
	if(!params) return '';
	let req_str = '';
	for(var key in params){
		req_str += key+'='+params[key]+'&';
	}
	return req_str.substr(0, req_str.length-1);
}
export function rewriteImgUrl(url){
	var res = remote_res_store.state.rewrite_img_url;
	if((/^http:\/\//).test(url)){
		return res+url.substr(7);
	}else if((/^https:\/\//).test(url)){
		return res+url.substr(8);
	}else{
		return res+url;
	}
}
export function fomatTime(val){
	if(!val) return val;
	val = parseInt(val)
	let minute = parseInt(val/60);
	let second = val % 60;
	return minute+":"+(second>9?second:'0'+second);
}