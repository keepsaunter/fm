<?php
	// $url = $_GET['url'];
	$temps = $_REQUEST;
	if(isset($temps['charset'])){
		header("Content-type: text/html; charset=".$temps['charset']); 
	}else{
		header("Content-type: text/html; charset=UTF-8");
	}
	$method = isset($temps['method']) ? $temps['method'] : 'get';
	$url = $temps['url'];
	$params = [];
	foreach($temps as $key=>$temp){
		if($key != 'url' && $key != 'method')
			$params[$key] = $temp;
	}
	if($method == 'get' && count($params) > 0){
		if(!strpos('?', $url)){
			$url .= '?';
		}else{
			$url .= '&';
		}
		foreach($params as $key=>$param){
			$url .= $key.'='.$param.'&';
		}
		$url = substr($url, 0, strlen($url)-1);
	}

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	if($method == 'post'){
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
	}

	$output = curl_exec($ch);
	curl_close($ch);

	echo $output;
?>