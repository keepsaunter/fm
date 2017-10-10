<template>
	<div>
		<TabContainer v-model="main_menu_selected">
			<TabContainerItem id="home">
				<Home></Home>
			</TabContainerItem>
		  	<TabContainerItem id="search">
		    	<Search></Search>
		  	</TabContainerItem>
		  	<TabContainerItem id="start">
		    	<Cell v-for="n in 6" :title="'选项 ' + n" />
		  	</TabContainerItem>
		  	<TabContainerItem id="mylisten">
		    	<Cell v-for="n in 6" :title="'选项 ' + n" />
		  	</TabContainerItem>
		  	<TabContainerItem id="mine">
		    	<Cell v-for="n in 6" :title="'选项 ' + n" />
		  	</TabContainerItem>
		</TabContainer>
		<BottomNav class="bottom-navigation"></BottomNav>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	import { TabContainer, TabContainerItem, Cell } from 'mint-ui';
	import Home from './home';
	import Search from './search';
	import BottomNav from '../bottom_navigation';
	export default {
		components: {
			TabContainer,
			TabContainerItem,
			Cell,
			Home,
			Search,
			BottomNav
		},
		data: () => {
			return {
				selected: '2'
			}
		},
		filters:{
			formatStr: function(str){
				return '2'+str;
			}
		},
		computed: {
			main_menu_selected:{
				get: function(){
					return this.$store.state.main_menu_selected;
				},
				set: function(val){
					this.$store.state.main_menu_selected = val;
				}
			}
		}
	}
</script>
<style>
	.bottom-navigation{
		position: fixed;
	}
</style>