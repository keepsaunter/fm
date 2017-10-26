<template>
	<div class="search-input-div">
		<input @focus='serchInputTrigger' @blur='serchInputTrigger' v-model="search_input_val" placeholder="艺术家姓名" class="search-input-input" type="" name="">
		<Mbutton class="search-input-button" @click="searchBtnClick">搜索</Mbutton>
		<AutoComplete @itemClick="autoCompItemClick" @clearAll="clearAutoCompleteAll" v-show="auto_complete_show" :data="search_history" class="auto-complete-component"></AutoComplete>
	</div>
</template>
<script>
	import { Button } from 'mint-ui';
	import AutoComplete from './auto_complete_fragment';
	export default {
		props: {
			search_history: '',
		},
		components: {
			Mbutton: Button,
			AutoComplete,
		},
		data: ()=>{
			return {
				search_input_val: '',
				auto_complete_show: false,
			}
		},
		methods: {
			searchBtnClick: function(){
				this.$emit('searchEvent', this.search_input_val);
			},
			serchInputTrigger: function(){
				let self = this;
				setTimeout(function(){
					self.auto_complete_show = !self.auto_complete_show;
				},0)
			},
			clearAutoCompleteAll: function(){
				this.$emit('clearAutoCompleteAll');
			},
			autoCompItemClick: function(val){
				this.search_input_val = val;
			}
		}
	}
</script>
<style lang='scss' scoped>
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
	.auto-complete-component{
		position: absolute;
    	top: 46px;
    	left: 5px;
    	right: 5px;
    	z-index: 8888;
    	border: solid white;
    	border-radius: 4px;
    	padding: 1px;
	}
</style>