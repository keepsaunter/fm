export default {
	updateHomeArtists: (state, new_val) => {
		state.home_artists.data = new_val;
	},
	updateHomeSingle: (state, new_val) => {
		state.home_single.data = new_val;
	},
	updateHomeLanguage: (state, new_val) => {
		state.home_language.data = new_val;
	},
	updateHomeMood: (state, new_val) => {
		state.home_mood.data = new_val;
	},
	updateHomeStyle: (state, new_val) => {
		state.home_style.data = new_val;
	},
}