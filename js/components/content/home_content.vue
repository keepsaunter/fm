<template>
	<div :class="'home-content-'+key_name+'-div scroller'">
		<div class="loading">
			<span class='text-span'>下拉刷新数据</span>
			<LoadingFragment class="loading-fragment" style='display:none'></LoadingFragment>
		</div>
    	<ContentItem class="content-item" v-for="item in data" :id="item.id" :img_url="item.cover" :title="item.name"></ContentItem>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import { Indicator } from 'mint-ui';
	import ContentItem from '../common/content_item';
	import slide from '../../slide';
	import LoadingFragment from '../common/loading_fragment1';
	export default {
		props: {
			data: '',
			key_name: '',
		},
		components: {
			ContentItem,
			LoadingFragment
		},
		created: function(){
			Indicator.open({
				spinnerType: 'fading-circle'
			});
		},
		mounted:function(){
			var self = this;
			slide({container:".home-content-"+self.key_name+"-div",next: function (e) {
			    self.$store.dispatch('getHomeList', self.key_name);
			    var that = this;
			    setTimeout(function () {
			        that.back.call();
			    }, 2000);
			}});
		},
		updated:function(){
			Indicator.close();
		}
	}
</script>
<style lang='scss' scoped>
	.content-item{
		display: inline-block;
		margin-top: 0.2rem;
	}
	.scroller{
		margin-top: 0.22rem;
		padding-bottom: 0.6rem;
		display: flex;
    	flex-wrap: wrap;
    	align-items: center;
    	justify-content: space-between;
    	&>div {
    		padding-top: 0.14rem;
    	}

		$loading_height:0.4rem;
    	transform: translate3d(0px, -$loading_height, 0px);
    	-webkit-overflow-scrolling:touch;
    	.loading{
			font-size: 0.14rem;
			height: $loading_height;
			line-height: $loading_height;
			text-align: center;
			width: 100%;
			background-color: #f1f1f1;
		}
    }
</style>