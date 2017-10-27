<template>
	<div class="content-item2-div">
		<p>{{item_name}}</p>
		<p style="color: #888;font-size:0.14rem;">
			<span>{{item_singger}}</span>-
			<span>{{item_albumName}}</span>
		</p>
	</div>
</template>
<script>
	export default {
		props: {
			item_name: '',
			item_singger: '',
			item_albumName: '',
		},
		components: {
		},
	}
</script>
<style>
	.content-item2-div{
		font-size: 0.18rem;
	    padding: 0.06rem;
	    border-bottom: 1px solid #888;
	}
</style>