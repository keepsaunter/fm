import Vue from 'vue';
import store from './vuex/store';
import Index from './components/index';
import 'mint-ui/lib/style.css';
import '../scss/base.scss';

document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

new Vue({
	el: '#application',
	store,
	render(h){
		return h(Index);
	},
})