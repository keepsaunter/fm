<template>
	<div class="back-icon-btn-div" @click="backBtnClick">
		<img style="width:30px" :src="ico_left_arrow">
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		computed: mapGetters([ 'ico_left_arrow', 'main_menu_selected_pre' ]),
		methods: {
			backBtnClick: function(){
				this.$store.commit('mainMenuSelectUpdate', this.main_menu_selected_pre);
			}
		}
	}
</script>
<style>
	.back-icon-btn-div{
		padding: 3px 3px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
</style>