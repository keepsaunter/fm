<template>
	<div id="top-navigation">
		<Navbar v-model="d_selected" class="top-navigation-bavbar">
		  	<TabItem v-for="item in data" :id="item.id">{{item.title}}</TabItem>
		</Navbar>
	</div>
</template>
<script>
	import { Navbar, TabItem } from 'mint-ui';
	export default {
		props: {
			data: '',
		},
		data: function(){
			return {
				d_selected: this.data ? this.data[0].id : '',
			}
		},
		components: { 
			Navbar,
			TabItem,
		},
		watch:{
			d_selected: function(val){
				this.$emit('selectChange', val);
			},
		}
	}
</script>
<style lang="sass">
	@import '../../../scss/variable.scss';
	#top-navigation{
		.mint-tab-item-label{
			font-size: 0.14rem;
		}
		.mint-tab-item{
			padding: 10px 0 !important;
		}
		.top-navigation-bavbar{
			background-color: $theme_color_grey;
		}
	}
</style>