import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useStateValue } from './StateProvider';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
// import { getTokenFromUrl } from './spotify';
// import { PlaylistAdd } from '@material-ui/icons';

function Sidebar() {
	const [ { playlists } ] = useStateValue();
	return (
		<div className="sidebar">
			<img
				className="sidebar_logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt="spotify logo"
			/>
			<SidebarOption Icon={HomeIcon} title="Home" />
			<SidebarOption Icon={SearchIcon} title="Search" />
			<SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

			<br />
			<strong className="sidebar_title">PLAYLISTS</strong>
			<hr />

			{playlists.items?.map((playlist) => (
				 <SidebarOption title={playlist.name} /> 
			))}
			
			{/* <SidebarOption title="Hip Hop" />
			<SidebarOption title=" Pop" />
			<SidebarOption title=" Rock" /> */}
		</div>
	);
}

export default Sidebar;
