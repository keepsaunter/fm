<template>
	<div class="listening-bottom">
		<img @click='updateVolume(-0.1)' class="item-icon" :src="ico_volume_sm">
		<img class="item-icon" :src="ico_list">
		<!-- <img class="item-icon" :src="ico_previous"> -->
		<div style="width:16%">
			<PlayBtn class="play-btn"></PlayBtn>
		</div>
		<Range ref='volume_range' class='volume-range' v-model="play_volume" :min="0" :max="1" :step="0.1"></Range>
		<img @click='listenNext' class="item-icon" :src="ico_next">
		<img @click='updateVolume(0.1)' class="item-icon" :src="ico_volume_bg">
	</div>
</template>
<script>
	import { Tabbar, TabItem, Range } from 'mint-ui';
	import { mapGetters, mapState } from 'vuex';
	import PlayBtn from '../common/playbtn';
	export default {
		components: {
			PlayBtn,
			Range
		},
		data:()=>{
			return {
				test: 30,
			}
		},
		computed: mapGetters(['play_volume', 'ico_home', 'main_menu', 'ico_volume_sm', 'ico_list', 'ico_next', 'ico_volume_bg']),
		methods: {
			updateVolume: function(value){
				this.$store.commit('updatePlayVolume', value);

				let ele = this.$refs.volume_range.$el;
				ele.style.opacity=1;
				let timer1 = setInterval(function(){
					ele.style.opacity -= (1.1-ele.style.opacity)/4;
					if(ele.style.opacity <= 0){
						clearInterval(timer1);
					}
				}, 200)
			},
			listenNext: function(){
				this.$store.dispatch('getNextListen');
			}
		},
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
		.volume-range{
			position:absolute;
			width: 80%;
			top: -40px;
    		z-index: 8888;
    		opacity: 0;
    		margin: auto;
		}
	}
</style>