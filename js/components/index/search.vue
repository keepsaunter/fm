<template>
	<div>
		<SearchInput></SearchInput>
		<TopNavigation :data="search_classify"></TopNavigation>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import SearchInput from '../common/search_input';
	import TopNavigation from '../top_navigation';
	export default {
		components: {
			SearchInput,
			TopNavigation,
		},
		computed: mapGetters([ 'search_classify' ])
	}
</script>
<style>
</style>