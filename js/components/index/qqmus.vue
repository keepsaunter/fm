<template>
	<div>
		<div @click="canselSearch" :class="'cancel-button'+(is_searching?' cancel-button-width':'')">取消</div>
		<SearchInput @searchEvent="startSearch" :search_history="search_history"></SearchInput>
		<hr/>
		<div v-show="!is_searching" :style="{height:(screen_height-17)/100+'rem',overflowY:'scroll'}">
		    <ContentItem v-for="item in qqmus_all_list" :item_name="item.songName" :item_singger="item.singerName" :item_albumName="item.albumName"></ContentItem>
		</div>
		<Loadmore v-show="is_searching">
			<ContentItem v-for="item in qqmus_data_search.list" :item_name="item.name" :item_singger="concatArrVal(item.singer)" :item_albumName="item.album.name"></ContentItem>
		</Loadmore>
	</div>
</template>
<script>
	import { Loadmore } from 'mint-ui';
	import { mapGetters } from 'vuex';
	import SearchInput from '../common/search_input';
	import SearchResult from '../content/search_result';
	import TopNavigation from '../top_navigation';
	import ContentItem from '../common/content_item2';
	export default {
		components: {
			SearchInput,
			ContentItem,
			Loadmore
		},
		data: () => {
			return {
				is_searching: false
			}
		},
		methods: {
			startSearch: function(search_val){
				this.is_searching = true;
				this.$store.dispatch('getQqmusSearch', search_val);
			},
			concatArrVal(arr, key='name', inter=' '){
				var str = '';
				arr.forEach(function(val, index){
					str += val[key];
					if(index < arr-1){
						str += inter;
					}
				});
				return str;
			},
			canselSearch: function(){
				this.is_searching = false;
			}
		},
		mounted: function(){
			this.$store.dispatch('getQqmusAllList');
		},
		computed: mapGetters([ 'qqmus_data_search', 'search_classify', 'search_history', 'qqmus_all_list', 'screen_height' ])
	}
</script>
<style>
	.qqmus_content_div{
		height:600px;
		overflow:scroll;
		font-size: 0.2rem;
	}
	.cancel-button{
		float:left;
		width: 0px;
		overflow: hidden;
		font-size:0.16rem;
		line-height:0.48rem;
		height:0.48rem;
		transition: width 0.6s;
	}
	.cancel-button-width{
		width: 34px;
		padding:0 0.06rem 0 0.08rem;
	}
</style>