<template>
	<div>
		<TopNavigation @selectChange="selectChange" class="top-navigation" :data="home_top_navigation"></TopNavigation>
		<TabContainer v-model="top_navi_selected">
			<TabContainerItem v-for="item in home_top_navigation" :style="{height:(screen_height-17)/100+'rem'}" :id="item.id">
				<transition name="fold">
					<HomeArtist v-if="item.id == 'artist'" key="artist"></HomeArtist>
				</transition>
					<HomeSingle v-if="item.id == 'single'" key="single"></HomeSingle>
					<HomeLanguage v-if="item.id == 'language'" key="language"></HomeLanguage>
					<HomeStyle v-if="item.id == 'style'" key="style"></HomeStyle>
					<HomeMood v-if="item.id == 'mood'" key="mood"></HomeMood>
			</TabContainerItem>
		</TabContainer>
	</div>
</template>
<script>
	import { mapGetters, mapState } from 'vuex';
	import { Navbar, TabItem, TabContainer, TabContainerItem, Cell } from 'mint-ui';
	import TopNavigation from '../top_navigation';
	import HomeArtist from '../content/home_artist';
	import HomeSingle from '../content/home_single';
	import HomeLanguage from '../content/home_language';
	import HomeStyle from '../content/home_style';
	import HomeMood from '../content/home_mood';
	export default {
		components: {
			TopNavigation,
			TabContainer,
			TabContainerItem,
			HomeArtist, HomeSingle, HomeLanguage, HomeStyle, HomeMood,
			Cell,
		},
		computed: {
			...mapGetters(['screen_height', 'home_top_navigation']),
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
	.fold-enter-active {
  animation-name: fold-in;
  animation-duration: .5s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: .5s;
}
@keyframes fold-in {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 100%, 0);
  }
}
</style>