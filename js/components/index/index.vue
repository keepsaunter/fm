<template>
	<div>
		<TabContainer v-model="selected">
			<TabContainerItem id="1">
				<Home></Home>
			</TabContainerItem>
		  	<TabContainerItem id="2">
		    	<Cell v-for="n in 4" :title="'测试 ' + n" />
		  	</TabContainerItem>
		  	<TabContainerItem id="3">
		    	<Cell v-for="n in 6" :title="'选项 ' + n" />
		  	</TabContainerItem>
		</TabContainer>
		<BottomNav class="bottom-navigation"></BottomNav>
	</div>
</template>
<script>
	import { TabContainer, TabContainerItem, Cell } from 'mint-ui';
	import Home from './home';
	import BottomNav from '../bottom_navigation';
	export default {
		components: {
			TabContainer,
			TabContainerItem,
			Cell,
			Home,
			BottomNav
		},
		data: () => {
			return {
				selected: '1'
			}
		}
	}
</script>
<style>
	.bottom-navigation{
		position: fixed;
	}
</style>