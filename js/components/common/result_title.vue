<template>
	<div class="result-title-div">
		<slot></slot>
		<div v-if="has_more" @click="loadMore" class="more_ico_div" :style="{backgroundImage:'url('+ico_more+')'}"></div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		props:{
			key_name: {
				default: ''
			},
			has_more: true,
		},
		computed: mapGetters(['ico_more']),
		methods: {
			loadMore: function(){
				this.$store.dispatch('searchMusicMore', this.key_name);
			}
		}
	}
</script>
<style lang='scss' scoped>
	@import '../../../scss/variable.scss';
	.result-title-div{
		font-size: 0.18rem;
		width: 100%;
		line-height: 0.3rem;
		font-weight: 100;
		border-bottom: 1px solid $theme_color_grey;
		.more_ico_div{
			background-size: contain;
    		width: 0.3rem;
    		height: 0.3rem;
			float: right;
		}
	}
</style>