<template>
	<div class="search-input-div">
		<input class="search-input-input" type="" name="">
		<Mbutton class="search-input-button">搜索</Mbutton>
	</div>
</template>
<script>
	import { Button } from 'mint-ui';
	export default {
		components: {
			Mbutton: Button,
		},
	}
</script>
<style>
	.search-input-div{
		display: flex;
		padding: 4px 4px;
	}
	.search-input-input{
		flex-grow: 1;
		border-radius: 0;
		border-bottom-left-radius: 10px;
    	border-top-left-radius: 10px;
    	outline: none;
	}
	.search-input-button{
		font-size: 0.16rem;
    	padding: 0px 20px;
    	border: none;
    	border-radius: 0;
    	border-top-right-radius: 10px;
    	border-bottom-right-radius: 10px;
    	outline: none;
    	border-style: inset;
    	border-width: 2px;
	}
</style>