<template>
	<div class="start-btn" @click.stop.prevent="startBtnClick">
		<div class="start-btn-img-div">
			<img style="width:100%;height:100%;" :src="listeningSong.img_url">
		</div>
		<!-- <div v-if="listeningSong.img_url!=img_earphone" class="start-btn-img-div-model" :style="{transform: 'rotate('+t_img_rotate_deg+'deg)'}"> -->
		<div v-if="listeningSong.img_url!=img_earphone" class="start-btn-img-div-model">
			<img style="width:100%;height:100%;" :src="listeningSong.is_listen?ico_pause:ico_start">
		</div>
		<svg class="circle_svg" width="100%" height="100%" version="1.1">
			<circle cx="50%" cy="50%" r="32" stroke="red" stroke-width="2" fill="white" stroke-dasharray="201px" :stroke-dashoffset="stroke_dashoffset"/>
		</svg>
	</div>
</template>
<script>
	import { mapState, mapGetters } from 'vuex';
	export default {
		data: () => {
			return {
				img_rotate_deg: 0,
			}
		},
		computed: {
			...mapState(['listeningSong']),
			...mapGetters(['img_music', 'img_earphone', 'ico_start', 'ico_pause']),
			stroke_dashoffset: function(){
				let total_length = 201;
				let duration = this.$store.state.listeningSong.duration;
				if(duration === 0){
					return total_length+'px';
				}else{
					let current_time = this.$store.state.listeningSong.current_time;
					return total_length*(1-current_time/duration)+'px';
				}
			},
			t_img_rotate_deg: function(){
				if(this.$store.state.listeningSong.is_listen){
					if(this.stroke_dashoffset){
						this.img_rotate_deg+=2;
					}
				}
				return this.img_rotate_deg;
			}
		},
		methods: {
			startBtnClick: function(){
				this.$store.dispatch('startBtnClickTrigger');
			}
		}
	}
</script>
<style scoped lang="sass">
	@import '../../../scss/variable.scss';
	@mixin inner_div_position {
		position: absolute;
		border-radius:50%;
		left: 2.4px;
		top: 2.4px;
		width: 94%;
		height: 94%;
		overflow: hidden;
	}
	.start-btn{
		width: $play_btn_width;
		height: $play_btn_width;
		border-radius: 50%;
		border: 1px solid $theme_color_green;
	}
	.start-btn > div{
		width: $play_btn_width;
		height: $play_btn_width;
		border-radius: 50%;
		background-color: $theme_color_green;
	}
	.start-btn > .start-btn-img-div{
		@include inner_div_position;
		z-index: 88;
	}
	.start-btn > .start-btn-img-div-model{
		@include inner_div_position;
		background-color: gray;
		opacity: 0.7;
		z-index: 888;
	}
	.circle_svg{
		 transform:rotate(-90deg)
	}
</style>