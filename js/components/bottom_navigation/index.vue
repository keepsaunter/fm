<template>
	<Tabbar class="bottom-navigation" v-model="selected">
	  <TabItem id="home">
	    <img slot="icon" :src="ico_home">
	    首页
	  </TabItem>
	  <TabItem id="search">
	    <img slot="icon" :src="ico_home">
	    搜索
	  </TabItem>
	  <TabItem id="start">
	    <PlayBtn class="play-btn"></PlayBtn>
	  </TabItem>
	  <TabItem id="mylisten">
	    <img slot="icon" :src="ico_home">
	    我听
	  </TabItem>
	  <TabItem id="mine">
	    <img slot="icon" :src="ico_home">
	    我的
	  </TabItem>
	</Tabbar>
</template>
<script>
	import { Tabbar, TabItem } from 'mint-ui';
	import { mapGetters } from 'vuex';
	import PlayBtn from '../common/playbtn';
	export default {
		components: {
			Tabbar,
			TabItem,
			PlayBtn
		},
		computed: mapGetters(['ico_home']),
		data: () => {
			return {
				selected: '1'
			}
		}
	}
</script>
<style lang="sass">
	@import '../../../scss/variable.scss';
	.bottom-navigation{
		background-color: $theme_color_grey;
		.mint-tab-item-icon{
			width: 0.2rem;
	    	height: 0.2rem;
		}
		.mint-tab-item{
			padding: 3px 0;
		}
		.play-btn{
			position: absolute;
		    bottom: 0;left: 50%;
		    transform: translate(-50%, 0%);
		}
	}
</style>