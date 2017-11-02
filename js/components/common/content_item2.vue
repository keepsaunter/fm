<template>
	<div class="content-item2-div" @click="clickHandle">
		<img style="width:0.64rem;height:0.64rem;margin-right:0.1rem" :src="item_img">
		<div>
			<p>{{item_name}}</p>
			<p style="color: #888;font-size:0.14rem;">
				<span>{{item_singger}}</span>-
				<span>{{item_albumName}}</span>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			item_name: '',
			item_singger: '',
			item_albumName: '',
			item_img: '',
		},
		methods: {
			clickHandle: function(){
				this.$emit('clickHandle');
			}
		}
	}
</script>
<style>
	.content-item2-div{
		font-size: 0.18rem;
	    padding: 0.06rem;
	    border-bottom: 1px solid #888;
	    display: flex;
	}
</style>