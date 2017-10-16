<template>
	<div class="song-listening-div">
		<img ref="ref_bak_img" :src="img_listen_bk" style="width:100%;">
		<BackIconBtn class="back_icon_btn"></BackIconBtn>
		<audio @timeupdate="listenTimeUpdate" style="width:100%;height:46px;color:red !import" autoplay :src="listeningSong.res_url"></audio>
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
		<ListenBottom class="listen-bottom"></ListenBottom>
	</div>
</template>
<script>
	import { mapState, mapGetters } from 'vuex';
	import { Indicator } from 'mint-ui';
	import BackIconBtn from '../common/back_icon_btn';
	import ListenBottom from '../bottom_navigation/listening_bottom';
	export default {
		components: {
			ListenBottom,
			BackIconBtn,
		},
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
	}
</script>
<style lang="scss">
	.song-listening-div{
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
			}
		}
	}
	.listen-bottom{
		position: fixed;
		bottom: 0px;
	}
</style>