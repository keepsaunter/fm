<template>
	<div class="my-loadmore-div">
		<slot name="content_slot"></slot>
		<slot name="load_more_slot">
			<LoadingFragment background_color="#B5B5B5"></LoadingFragment>
		</slot>
	</div>
</template>
<script>
	import LoadingFragment from './loading_fragment1';
	export default {
		components: {
			LoadingFragment,
		},
		mounted: function(){
			let self = this;
			this.$el.addEventListener('scroll', function(){
				if(this.scrollHeight == this.scrollTop + this.clientHeight){
					self.$emit('loadMore');
				}
			});
		}
	}
</script>
<style scoped lang='scss'>
	.my-loadmore-div{
		overflow:scroll;
		-webkit-overflow-scrolling: touch;
	}
</style>