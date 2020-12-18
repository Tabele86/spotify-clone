export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: null
	//Place token in here to skip login during development phase
	// token:
	// 	'BQC6xvHXA4rwk-uCqeRvRve_3EWcxvbMlYvxUKbY39ptb_hvNogH2uvgZWVVSYWy39F9K8OpSb3XDplstd05nwuJoXcuoS_4V1QwSzdgGZXu-FoWyYazy0Zjin72Qx7rmGO9LKTMcre80E_nTX7ckQ2mwVhY'
};

const reducer = (state, action) => {
	console.log(action);

	//Action -> type, [payload]

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			};
		case 'SET_ITEM':
			return {
				...state,
				item: action.item
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			};
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly
			};
		case 'SET_TOP_ARTISTS':
			return {
				...state,
				top_artists: action.top_artists
			};
		case 'SET_PLAYING':
			return {
				...state,
				playing: action.playing
			};
		default:
			return state;
	}
};

export default reducer;
