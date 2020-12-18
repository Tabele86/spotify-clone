import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { useStateValue } from './components/StateProvider';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
	// const [ token, setToken ] = useState(null);
	const [ { token }, dispatch ] = useStateValue();

	//strip token from Url, stores in state and then renders next state
	useEffect(
		() => {
			const hash = getTokenFromUrl();
			window.location.hash = '';
			const _token = hash.access_token;
			//if token render logged in state, else push log in
			if (_token) {
				spotify.setAccessToken(_token);

				dispatch({
					type: 'SET_TOKEN',
					token: _token
				});
				// setToken(_token);

				//gives access token to spotify api

				//
				spotify.getMe().then((user) =>
					dispatch({
						type: 'SET_USER',
						user
					})
				);

				spotify.getUserPlaylists().then((playlists) =>
					dispatch({
						type: 'SET_PLAYLISTS',
						playlists
					})
				);
				spotify.getPlaylist('37i9dQZEVXcXz3p0c2TqXj').then((response) =>
					// spotify.getPlaylist({user?}).then((response) =>
					dispatch({
						type: 'SET_DISCOVER_WEEKLY',
						discover_weekly: response
					})
				);
			}

			// console.log('TOKEN TOKEN TOKEN', token);
		},
		[ token, dispatch ]
	);

	// console.log('🧑', user);
	// console.log('🧐', token);

	return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
