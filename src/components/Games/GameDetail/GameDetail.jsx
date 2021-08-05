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
				<Link to='/games'><button>RETURN TO LIST</button></Link>
			</div>
		</div>
	);
}

export default GameDetail;