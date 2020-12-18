export const authEndpoint = 'https://acounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

const clientId = '8fc8ec8712a746b89f05d71b4c1e710d';

const scopes =
	'user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-modify-playback-state%20user-top-read%20';

export const getTokenFromUrl = () => {
	return window.location.hash.substring(1).split('&').reduce((initial, item) => {
		// #accessToken=mysupersecretkey&name=sonny
		let parts = item.split('=');
		initial[parts[0]] = decodeURIComponent(parts[1]);
		return initial;
	}, {});
};

export const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;

//failed scopes function
//
// const scopes = [
// 	'user-read-currently-playing',
// 	'user-read-recently-played',
// 	'user-read-playback-state',
// 	'user-modify-playback-state',
// 	'user-top-read'
// ];

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
// 	'%20'
// )}&response_type=token&show_dialog=true`;
