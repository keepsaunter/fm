<template>
	<div>
		<SearchInput @clearAutoCompleteAll="clearAutoCompleteAll" @searchEvent="startSearch" :search_history="search_history"></SearchInput>
		<TopNavigation @selectChange="searchSelectChange" :data="search_classify"></TopNavigation>
		<SearchResult></SearchResult>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import SearchInput from '../common/search_input';
	import SearchResult from '../content/search_result';
	import TopNavigation from '../top_navigation';
	export default {
		components: {
			SearchInput,
			SearchResult,
			TopNavigation,
		},
		methods: {
			startSearch: function(search_val){
				this.$store.dispatch('searchMusic', search_val);
			},
			searchSelectChange: function(select){
				this.$store.commit('updateSearchSelect', select);
			},
			clearAutoCompleteAll: function(){
				this.$store.commit('clearSearchHistory');
			}
		},
		computed: mapGetters([ 'search_classify', 'search_history' ])
	}
</script>
<style>
</style>