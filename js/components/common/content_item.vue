<template>
	<div class="item-div">
		<div class="item-img-div" :style="{backgroundImage:'url('+ico_home+')'}"></div>
		<p class="item-title">test</p>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		computed: mapGetters(['ico_home']),
	}
</script>
<style lang="sass">
	@import '../../../scss/variable.scss';
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
		border: solid 1px red;
	}
	.item-title{
		font-size: 0.16rem;
	}
</style>