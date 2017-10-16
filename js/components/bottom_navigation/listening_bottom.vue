<template>
	<div class="listening-bottom">
		<img class="item-icon" :src="ico_list">
		<img class="item-icon" :src="ico_previous">
		<div style="width:16%">
			<PlayBtn class="play-btn"></PlayBtn>
		</div>
		<img class="item-icon" :src="ico_next">
		<img class="item-icon" :src="ico_trumpet">
	</div>
</template>
<script>
	import { Tabbar, TabItem } from 'mint-ui';
	import { mapGetters, mapState } from 'vuex';
	import PlayBtn from '../common/playbtn';
	export default {
		components: {
			PlayBtn
		},
		computed: mapGetters(['ico_home', 'main_menu', 'ico_list', 'ico_previous', 'ico_next', 'ico_trumpet']),
	}
</script>
<style lang="sass">
	@import '../../../scss/variable.scss';
	.listening-bottom{
		display: flex;
		width: 100%;
		height: $play_btn_width;
		justify-content: space-around;
		align-items: center;
		background-color: $theme_color_grey;
		.item-icon{
	    	height: 0.3rem;
		}
		.mint-tab-item{
			padding: 3px 0;
		}
		.play-btn{
			position: absolute;
		    bottom: 0;left: 50%;
		    transform: translate(-50%, 0%);
		}
		.no-background-item{
			background-color: transparent !important;
		}
	}
</style>