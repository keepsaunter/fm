<template>
	<div class="spinner">
		<div class="bounce1" :style="{backgroundColor:background_color}"></div>
		<div class="bounce2" :style="{backgroundColor:background_color}"></div>
	  	<div class="bounce3" :style="{backgroundColor:background_color}"></div>
	</div>
</template>
<script>
	export default {
		props: {
			background_color: {
				default: 'white'
			}
		}
	}
</script>
<style>
	.spinner {
		margin: 3px auto 0;
	  	width: 150px;
	  	text-align: center;
	}
	 
	.spinner > div {
	  	width: 30px;
	  	height: 30px;
	 
	  	border-radius: 100%;
	  	display: inline-block;
	  	-webkit-animation: bouncedelay 1.4s infinite ease-in-out;
	  	animation: bouncedelay 1.4s infinite ease-in-out;
	  	/* Prevent first frame from flickering when animation starts */
	  	-webkit-animation-fill-mode: both;
	  	animation-fill-mode: both;
	}
	 
	.spinner .bounce1 {
	  	-webkit-animation-delay: -0.32s;
	  	animation-delay: -0.32s;
	}
	 
	.spinner .bounce2 {
	  	-webkit-animation-delay: -0.16s;
	  	animation-delay: -0.16s;
	}
	 
	@-webkit-keyframes bouncedelay {
	  	0%, 80%, 100% { -webkit-transform: scale(0.0) }
	  	40% { -webkit-transform: scale(1.0) }
	}
	 
	@keyframes bouncedelay {
	  	0%, 80%, 100% {
	    	transform: scale(0.0);
	    	-webkit-transform: scale(0.0);
	  	} 40% {
	    	transform: scale(1.0);
	    	-webkit-transform: scale(1.0);
	  	}
	}
</style>