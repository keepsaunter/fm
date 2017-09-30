<template>
	<div id="top-navigation">
		<Navbar v-model="selected" class="top-navigation-bavbar">
		  	<TabItem id="1">艺术家</TabItem>
		  	<TabItem id="2">单曲</TabItem>
		  	<TabItem id="3">语言年代</TabItem>
		  	<TabItem id="4">风格</TabItem>
		  	<TabItem id="5">心情</TabItem>
		</Navbar>
	</div>
</template>
<script>
	import { Navbar, TabItem } from 'mint-ui';
	export default {
		components: { 
			Navbar,
			TabItem,
		},
		data: ()=>{
			return {
				selected: '1',
			}
		}
	}
</script>
<style lang="sass">
	@import '../../../scss/variable.scss';
	#top-navigation{
		.mint-tab-item-label{
			font-size: 0.14rem;
		}
		.mint-tab-item{
			padding: 10px 0 !important;
		}
		.top-navigation-bavbar{
			background-color: $theme_color_grey;
		}
	}
</style>