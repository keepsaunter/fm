<template>
	<div class="start-btn">
		<div>
			
		</div>
	</div>
</template>
<style scoped lang="sass">
	@import '../../../scss/variable.scss';
	.start-btn{
		width: $play_btn_width;
		height: $play_btn_width;
		border-radius: 50%;
		border: solid 0.011rem $theme_color_green;
		background-color: white;
		padding: 0.02rem;
	}
	.start-btn > div{
		width: $play_btn_width;
		height: $play_btn_width;
		border-radius: 50%;
		background-color: $theme_color_green;
	}
</style>