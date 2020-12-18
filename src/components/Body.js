import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useStateValue } from './StateProvider';

function Body({ spotify }) {
	const [ { discover_weekly } ] = useStateValue();
	return (
		<div className="body">
		<div className="body_top">
			<Header spotify={spotify} />
			<div className="body_info">
				<img
					className='discover_weekly'
					src={discover_weekly?.images[0].url}
					alt=""
				/>
				<div className="body_infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					</div>
					<p>{ discover_weekly?.description }</p>
				</div>
				<div className="body_songs">
				
				<div className="body_icons">
					<PlayCircleFilled className='body_shuffle' />
					<Favorite className='body_fav' fontSize='large'/>
					<MoreHoriz />
				</div>

				{/* List of song */}
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow className='song_tracks' track={item.track}/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Body;
