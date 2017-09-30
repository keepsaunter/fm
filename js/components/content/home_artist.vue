<template>
	<div style="padding:0.3rem 0;">
    	<ContentItem class="content-item" v-for="n in 26"></ContentItem>
	</div>
</template>
<script>
	import ContentItem from '../common/content_item'
	export default {
		components: {
			ContentItem
		}
	}
</script>
<style>
	.content-item{
		display: inline-block;
		margin-top: 0.2rem;
	}
</style>