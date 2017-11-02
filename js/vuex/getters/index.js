import { fomatTime } from '../../lib';
export default {
	current_time: (state) => {
		return fomatTime(state.listeningSong.current_time);
	},
	duration: (state) => {
		return fomatTime(state.listeningSong.duration);
	},
	main_menu_selected: state => state.main_menu_selected,
	main_menu_selected_pre: state => state.main_menu_selected_pre,
	search_state: state => state.search_state,
	search_history: state => state.search_state.keywords,
	play_volume: state => state.play_volume,
}