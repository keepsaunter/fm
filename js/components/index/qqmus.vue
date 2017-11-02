<template>
	<div>
		<div @click="canselSearch" :class="'cancel-button'+(is_searching?' cancel-button-width':'')">取消</div>
		<SearchInput @searchEvent="startSearch" :search_history="search_history"></SearchInput>
		<hr/>
		<div class="qqmus-show-div" v-show="!is_searching" :style="{height:(screen_height-75)/100+'rem',overflowY:'scroll'}">
		    <ContentItem v-for="item in qqmus_all_list" @clickHandle="clickHandle(item)" :res_url="item.url" :item_img="item.img_url" :item_name="item.songName" :item_singger="item.singerName" :item_albumName="item.albumName"></ContentItem>
		</div>
		<LoadMore v-show="is_searching" @loadMore="loadMore" :style="{height:(screen_height-75)/100+'rem'}">
			<template slot="content_slot">
				<ContentItem v-for="item in qqmus_data_search.list" @clickHandle="clickHandleSearch(item)" :item_img="item.img_url" :item_name="item.name" :item_singger="concatArrVal(item.singer)" :item_albumName="item.album.name"></ContentItem>
			</template>
			<div v-if="qqmus_search_has_more" slot="load_more_slot"></div>
		</LoadMore>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import SearchInput from '../common/search_input';
	import SearchResult from '../content/search_result';
	import TopNavigation from '../top_navigation';
	import ContentItem from '../common/content_item2';
	import LoadMore from '../common/my_loadmore';
	export default {
		components: {
			SearchInput,
			ContentItem,
			LoadMore,
		},
		data: () => {
			return {
				is_searching: false,
				search_val: '',
			}
		},
		methods: {
			startSearch: function(search_val){
				this.is_searching = true;
				this.search_val = search_val;
				this.$store.dispatch('getQqmusSearch', {keyword:search_val});
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
			},
			loadMore: function(){
				this.$store.dispatch('getQqmusSearch', {type:'more',keyword:this.search_val});
			},
			clickHandle: function(data){
				var temp = [];
				
				temp.artist = data.singerName;
				temp.img_url = data.img_url;
				temp.url = 'http://ws.stream.qqmusic.qq.com/'+data.id+'.m4a?fromtag=46';
				temp.title = data.songName;
				temp.song_id = data.id;
				this.$store.dispatch('qqmusListenSong', temp);
			},
			clickHandleSearch: function(data){
				var temp = [];
				temp.artist = data.singer[0].name;
				temp.img_url = data.img_url;
				temp.url = 'http://ws.stream.qqmusic.qq.com/'+data.id+'.m4a?fromtag=46';
				temp.title = data.title;
				temp.song_id = data.id;
				this.$store.dispatch('qqmusListenSong', temp);
			}
		},
		mounted: function(){
			this.$store.dispatch('getQqmusAllList');
		},
		computed: mapGetters([ 'qqmus_search_has_more', 'qqmus_data_search', 'search_classify', 'search_history', 'qqmus_all_list', 'screen_height' ])
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
	.qqmus-show-div {
		-webkit-overflow-scrolling: touch;
	}
</style>