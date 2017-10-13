import { fomatTime } from '../../lib';
export default {
	current_time: (state) => {
		return fomatTime(state.listeningSong.current_time);
	},
	duration: (state) => {
		return fomatTime(state.listeningSong.duration);
	}
}