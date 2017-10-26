<template>
	<div class="auto-complete-component" v-if="data && data.length>0">
		<TabContainerItem>
	    	<Cell @click.native="itemClick(item)" style="padding-left:10px;padding-right:10px;overflow:hidden;" v-for="item in data" :title="item" />
	    	<Cell @click.native="clearAll" style="text-align:center;background-color:#f3f3f3;" title="清除所有" />
	  	</TabContainerItem>
  	</div>
</template>
<script>
	import { TabContainerItem, Cell } from 'mint-ui';
	export default {
		props: {
			data: ''
		},
		components: {
			TabContainerItem,
			Cell,
		},
		methods: {
			itemClick: function(val){
				this.$emit('itemClick', val);
			},
			clearAll: function(){
				this.$emit('clearAll');
			}
		}
	}
</script>
<style scoped>
	.auto-complete-component{
		height: 60%;
		overflow-y: scroll;
	}
</style>