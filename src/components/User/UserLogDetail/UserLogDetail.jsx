import {Link} from 'react-router-dom';

const UserLogDetail = ({log}) => {
    return(
        <div>
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
			</div>
            <hr />
			<div>
				<Link to='/user'><button>RETURN TO LIST</button></Link>
			</div>
		</div>
    )
}

export default UserLogDetail;