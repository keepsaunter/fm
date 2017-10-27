<template>
	<div>
		<TabContainer v-model="main_menu_selected">
			<TabContainerItem id="home">
				<Home></Home>
			</TabContainerItem>
		  	<TabContainerItem id="douban">
		    	<Search></Search>
		  	</TabContainerItem>
		  	<TabContainerItem id="start">
		    	<Listening></Listening>
		  	</TabContainerItem>
		  	<TabContainerItem id="qqmus">
		    	<!-- <Cell v-for="n in 6" :title="'选项 ' + n" /> -->
		    	<Qqmus></Qqmus>
		  	</TabContainerItem>
		  	<TabContainerItem id="wangyi">
		    	<Cell v-for="n in 6" :title="'选项 ' + n" />
		  	</TabContainerItem>
		</TabContainer>
		<BottomNav v-show="main_menu_selected!='start'" class="bottom-navigation"></BottomNav>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	import { TabContainer, TabContainerItem, Cell } from 'mint-ui';
	import Home from './home';
	import Search from './search';
	import Listening from './listening';
	import Qqmus from './qqmus';
	import BottomNav from '../bottom_navigation';
	export default {
		components: {
			TabContainer,
			TabContainerItem,
			Cell,
			Home,
			Search,
			Listening,
			BottomNav,
			Qqmus
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