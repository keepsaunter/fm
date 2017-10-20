<template>
	<div class="song-listening-div">
		<BackIconBtn class="back_icon_btn"></BackIconBtn>
		<ListeingContent></ListeingContent>
		<ListenBottom class="listen-bottom"></ListenBottom>
	</div>
</template>
<script>
	import BackIconBtn from '../common/back_icon_btn';
	import ListenBottom from '../bottom_navigation/listening_bottom';
	import ListeingContent from '../content/listening_content';
	export default {
		components: {
			ListenBottom,
			BackIconBtn,
			ListeingContent,
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
	}
	.listen-bottom{
		position: fixed;
		bottom: 0px;
	}
</style>