import {Link} from 'react-router-dom';

const UserLogDetail = ({log}) => {
    return(
        <div>
			<div>
				<h3>{log.game}</h3>
			</div>
			<div>
				Rating: {log.rating}
			</div>
            <div>
                Review: {log.review}
            </div>
            <hr />
			<div>
				<Link to='/user'>RETURN TO LIST</Link>
			</div>
		</div>
    )
}

export default UserLogDetail;