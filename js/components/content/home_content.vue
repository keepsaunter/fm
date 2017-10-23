<template>
	<div ref='home_content_div' class="home-content-div scroller">
		<div class="loading">下拉刷新数据</div>
    	<ContentItem class="content-item" v-for="item in data" :id="item.id" :img_url="item.cover" :title="item.name"></ContentItem>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import { Indicator } from 'mint-ui';
	import ContentItem from '../common/content_item';
	import { slide } from '../../lib';
	export default {
		props: {
			data: '',
			key_name: '',
		},
		components: {
			ContentItem
		},
		created: function(){
			Indicator.open({
				spinnerType: 'fading-circle'
			});
		},
		mounted:function(){
			slide({container:".home-content-div",next: function (e) {
			    //松手之后执行逻辑,ajax请求数据，数据返回后隐藏加载中提示
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
	.home-content-div{
		padding: 0.2rem 0 0.7rem 0;
		display: flex;
    	flex-wrap: wrap;
    	align-items: center;
    	justify-content: space-between;
    	&>div {
    		padding-top: 0.14rem;
    	}
	}
	.content-item{
		display: inline-block;
		margin-top: 0.2rem;
	}
	.scroller .loading{font-size: 0.14rem;height: 60px;line-height: 60px;text-align: center;width: 100%;background-color: #f1f1f1;}
    .scroller{-webkit-overflow-scrolling:touch;}
</style>