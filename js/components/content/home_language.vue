<template>
	<div class="home-content-div">
    	<ContentItem class="content-item" v-for="item in home_language" :id="item.id" :img_url="item.cover" :title="item.name"></ContentItem>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import { Indicator } from 'mint-ui';
	import ContentItem from '../common/content_item';
	export default {
		components: {
			ContentItem
		},
		computed: mapGetters([ 'home_language' ]),
		created: function(){
			Indicator.open({
				spinnerType: 'fading-circle'
			});
			this.$store.dispatch('getHomeLanguage');
		},
		updated:function(){
			Indicator.close();
		}
	}
</script>
<style lang='scss'>
	.home-content-div{
		padding: 0.3rem 0 0.7rem 0;
		display: flex;
    	flex-wrap: wrap;
    	align-items: center;
    	justify-content: space-around;
    	&>div {
    		padding-top: 0.14rem;
    	}
	}
	.content-item{
		display: inline-block;
		margin-top: 0.2rem;
	}
</style>