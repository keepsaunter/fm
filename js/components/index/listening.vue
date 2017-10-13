<template>
	<div class="song-listening-div">
		<img :src="res_url" style="width:100%;">
		<audio @timeupdate="test" style="width:100%;height:46px;color:red !import" controls autoplay :src="listeningSong.res_url"></audio>
		<div>
			<span>{{current_time}}</span>
			<span>{{duration}}</span>
		</div>
		<p>{{listeningSong.title}}</p>
		<p>{{listeningSong.artist}}</p>
		<p>{{listeningSong.channel_name}}</p>
	</div>
</template>
<script>
	import { mapState, mapGetters } from 'vuex';
	import { rewriteImgUrl } from '../../lib';
	export default {
		computed: {
			...mapState([ 'listeningSong' ]),
			...mapGetters(['current_time', 'duration']),
			res_url: function(){
				return rewriteImgUrl(this.listeningSong.bk_img_url);
			}
		},
		methods: {
			test: function(){
				let target = event.target;
				this.$store.commit('updateListenDuration', target.duration);
				this.$store.commit('updateListenCurrentTime', target.currentTime);
			},
		}
	}
</script>
<style>
	.song-listening-div{
		font-size: 0.1rem;
	}
</style>