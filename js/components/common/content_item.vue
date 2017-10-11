<template>
	<div class="item-div" @click="startListen">
		<div class="item-img-div" :style="{backgroundImage:'url('+(img_url?img_url:ico_home)+')'}"></div>
		<p class="item-title">{{title}}</p>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		props: {
			id: '',
			img_url: '',
			title: {
				default: 'test'
			}
		},
		computed: mapGetters(['ico_home']),
		methods: {
			startListen: function(){
				if(!this.id) return;
				this.$store.dispatch('listenSong', {id:this.id, img_url: this.img_url, channel_name:this.title});
			}
		}
	}
</script>
<style lang="sass">
	@import '../../../scss/variable.scss';
	.content-item-play{
		width: 0;
		height: 0;
		border-radius: 10px solid transparent;
	}
	.item-div{
		width: $content_item_img_width+0.2;
		height: $content_item_img_width+0.2;
		text-align: center;
	}
	.item-img-div{
		width: $content_item_img_width;
		height: $content_item_img_width;
		margin: auto;
		background-size: 100% 100%;
		border-radius: 50%;
	}
	.item-title{
		font-size: 0.12rem;
		margin-top: 0.1rem;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>