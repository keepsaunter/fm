<template>
	<div class="search-result-div" :style="{height:screen_height-140+'px',overflowY: 'scroll'}">
		<div v-for="(val, key) in (search_state.select!='all'?(search_result_data[search_state.select]?{[search_state.select]:search_result_data[search_state.select]}:null):search_result_data)">
			<ResultTitle :has_more="val.items.length<val.total" :key_name=key>{{search_classify_key_val[key]}}</ResultTitle>
			<ContentItem class="content-item" v-for="item in val.items" :id="item.id" :img_url="item.avatar||item.cover" :title="item.name_usual||item.title"></ContentItem>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import { Indicator } from 'mint-ui';
	import ContentItem from '../common/content_item';
	import ResultTitle from '../common/result_title';
	export default {
		components: {
			ContentItem,
			ResultTitle,
		},
		computed: {
			...mapGetters([ 'search_state', 'search_result_data', 'screen_height', 'search_classify_key_val' ]),
		},
	}
</script>
<style lang='scss' scoped>
	.search-result-div{
    	&>div {
    		padding-top: 0.14rem;
    	}
	}
	.content-item{
		display: inline-block;
		margin-top: 0.2rem;
	}
</style>