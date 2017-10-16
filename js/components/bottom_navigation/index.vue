<template>
	<Tabbar class="bottom-navigation" v-model="main_menu_selected">
		<TabItem :class="key==2?'no-background-item':''" v-for="(item, key) in main_menu" :id="item.id">
		    <PlayBtn v-if="key==2" class="play-btn"></PlayBtn>
		    <img v-if="key!=2" slot="icon" :src="item.icon">
		    {{item.title}}
	  	</TabItem>
	</Tabbar>
</template>
<script>
	import { Tabbar, TabItem } from 'mint-ui';
	import { mapGetters, mapState } from 'vuex';
	import PlayBtn from '../common/playbtn';
	export default {
		components: {
			Tabbar,
			TabItem,
			PlayBtn
		},
		computed: Object.assign({
			main_menu_selected:{
				get: function(){
					return this.$store.state.main_menu_selected;
				},
				set: function(val){
					this.$store.state.main_menu_selected = val;
					return val;
				}
			}
		}, mapGetters(['ico_home', 'main_menu'])),
	}
</script>
<style lang="sass" scoped>
	@import '../../../scss/variable.scss';
	.bottom-navigation{
		background-color: $theme_color_grey;
		.mint-tab-item-icon{
			width: 0.2rem;
	    	height: 0.2rem;
		}
		.mint-tab-item{
			padding: 3px 0;
		}
		.play-btn{
			position: absolute;
		    bottom: 0;left: 50%;
		    transform: translate(-50%, 0%);
		}
		.no-background-item{
			background-color: transparent !important;
		}
	}
</style>