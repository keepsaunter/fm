<template>
	<div class="search-input-div">
		<input v-model="search_input_val" placeholder="艺术家姓名" class="search-input-input" type="" name="">
		<Mbutton class="search-input-button" @click="searchBtnClick">搜索</Mbutton>
	</div>
</template>
<script>
	import { Button } from 'mint-ui';
	export default {
		data: ()=>{
			return {
				search_input_val: '',
			}
		},
		components: {
			Mbutton: Button,
		},
		methods: {
			searchBtnClick: function(){
				this.$emit('searchEvent', this.search_input_val);
			}
		}
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
    	padding-left: 0.1rem;
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