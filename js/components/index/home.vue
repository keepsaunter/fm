<template>
	<div>
		<TopNavigation class="top-navigation"></TopNavigation>
		<TabContainer v-model="selected">
			<TabContainerItem :style="{height:(screen_height-17)/100+'rem'}" id="1">
				<HomeArtist></HomeArtist>
			</TabContainerItem>
		  	<TabContainerItem id="2">
		    	<Cell v-for="n in 4" :title="'测试 ' + n" />
		  	</TabContainerItem>
		  	<TabContainerItem id="3">
		    	<Cell v-for="n in 6" :title="'选项 ' + n" />
		  	</TabContainerItem>
		</TabContainer>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import { Navbar, TabItem, TabContainer, TabContainerItem, Cell } from 'mint-ui';
	import TopNavigation from '../top_navigation';
	import HomeArtist from '../content/home_artist';
	export default {
		components: {
			TopNavigation,
			TabContainer,
			TabContainerItem,
			HomeArtist,
			Cell,
		},
		computed: mapGetters(['screen_height']),
		data: () => {
			return {
				selected: '1'
			}
		}
	}
</script>
<style>
	.top-navigation{
		position: fixed;
		width: 100%;
		z-index: 1;
	}
	.mint-tab-container{
    	overflow: auto;
	}
</style>