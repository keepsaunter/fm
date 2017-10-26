<template>
	<div>
		<TopNavigation @selectChange="selectChange" class="top-navigation" :data="home_top_navigation"></TopNavigation>
		<TabContainer v-model="top_navi_selected">
			<TabContainerItem v-for="item in home_top_navigation" :style="{height:(screen_height-17)/100+'rem',overflowY:'scroll'}" :id="item.id">
				<HomeContent v-if="item.id == 'artist'" key_name="artist" :data="home_artist"></HomeContent>
				<HomeContent v-if="item.id == 'single'" key_name="single" :data="home_single"></HomeContent>
				<HomeContent v-if="item.id == 'language'" key_name="language" :data="home_language"></HomeContent>
				<HomeContent v-if="item.id == 'style'" key_name="style" :data="home_style"></HomeContent>
				<HomeContent v-if="item.id == 'mood'" key_name="mood" :data="home_mood"></HomeContent>
			</TabContainerItem>
		</TabContainer>
	</div>
</template>
<script>
	import { mapGetters, mapState } from 'vuex';
	import { Navbar, TabItem, TabContainer, TabContainerItem, Cell } from 'mint-ui';
	import TopNavigation from '../top_navigation';
	import HomeContent from '../content/home_content';
	export default {
		components: {
			TopNavigation,
			TabContainer,
			TabContainerItem,
			HomeContent,
			Cell,
		},
		created: function(){
			this.$store.dispatch('getHomeList', 'artist');
		},
		mounted: function(){
			let self = this;
			setTimeout(function(){
				self.$store.dispatch('getHomeList', 'single');
				self.$store.dispatch('getHomeList', 'language');
				self.$store.dispatch('getHomeList', 'style');
				self.$store.dispatch('getHomeList', 'mood');
			}, 100);
		},
		computed: {
			...mapGetters(['home_artist', 'home_single', 'home_language', 'home_style', 'home_mood', 'screen_height', 'home_top_navigation']),
			...mapState([ 'homepage_selected' ]),
			top_navi_selected: {
				set: function(val){
					this.$store.commit('homeSelectUpdate', val);
				},
				get: function(){
					return this.homepage_selected;
				}
			},
		},
		methods: {
			selectChange: function(val){
				this.top_navi_selected = val;
			},
		}
	}
</script>
<style>
	.top-navigation{
		position: fixed;
		width: 100%;
		z-index: 1;
	}
	.mint-tab-container{
    	overflow: auto;
	}
</style>