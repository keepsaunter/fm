export function urlEncode(params){
	if(!params) return '';
	let req_str = '';
	for(var key in params){
		req_str += key+'='+params[key]+'&';
	}
	return req_str.substr(0, req_str.length-1);
}
