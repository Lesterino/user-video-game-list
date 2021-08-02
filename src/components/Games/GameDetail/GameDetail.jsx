import React from 'react';
import { Link } from 'react-router-dom';

const GameDetail = ({ game }) => {
	return (
		<div>
			<div>
				<h3>{game.title}</h3>
			</div>
			<div>
				Genre: {game.genre}
			</div>
            <div>
                Average Rating: rating goes here
            </div>
            <hr />
			<div>
				<Link to='/'>RETURN TO LIST</Link>
			</div>
		</div>
	);
}

export default GameDetail;