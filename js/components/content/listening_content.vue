<template>
	<div class="listening-content-div">
		<img :src="img_listen_bk" style="width:100%;">
		<audio ref="ref_fm_audio" @timeupdate="listenTimeUpdate" style="width:100%;height:46px;color:red !import" autoplay :src="listeningSong.res_url"></audio>
		<div class="listening-detail-info-div">
			<p style="font-size: 0.168rem;">{{listeningSong.title}}</p>
			<p style="margin:0.06rem 0 0.2rem 0;">{{'—— '+listeningSong.artist+' ——'}}</p>
			<div class="listening-lyric-div">{{listeningSong.lyric}}</div>
		</div>
		<!--<div> 
			<span>{{current_time}}</span>
			<span>{{duration}}</span>
		</div>
		<p>{{listeningSong.title}}</p>
		<p>{{listeningSong.artist}}</p>
		<p>{{listeningSong.channel_name}}</p> -->
	</div>
</template>
<script>
	import { mapState, mapGetters } from 'vuex';
	export default {
		computed: {
			...mapState([ 'listeningSong' ]),
			...mapGetters(['current_time', 'duration', 'img_listen_bk']),
		},
		methods: {
			listenTimeUpdate: function(){
				let target = event.target;
				this.$store.commit('updateListenDuration', target.duration);
				this.$store.commit('updateListenCurrentTime', target.currentTime);
			},
		},
		watch: {
			'listeningSong.is_listen':{
				handler: function(val){
					if(val === false){
						this.$refs.ref_fm_audio.pause();
					}else{
						var self = this;
						setTimeout(function(){
							self.$refs.ref_fm_audio.play();
						}, 0);
					}
				},
				deep:true,
			},
		}
	}
</script>
<style lang="scss">
	.listening-content-div{
		font-size: 0.1rem;
		.back_icon_btn{
			position: absolute;
			top: 10px;
			left: 10px;
			z-index: 888
		}
		.listening-detail-info-div{
			height:80%;
			display:flex;
			flex-direction: column;
			width:88%;
			margin-left:6%;
			text-align: center;
			position:absolute;
			top:0px;
			padding-top: 0.178rem;
			.listening-lyric-div{
				line-height:0.28rem;
				padding:25px;
				font-size:0.16rem;
				flex-grow:1;

				height: 100%;
    			overflow-y: auto;
			}
		}
	}
	.listen-bottom{
		position: fixed;
		bottom: 0px;
	}
</style>