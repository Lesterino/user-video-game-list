import { Link } from "react-router-dom";
import * as usersService from '../../../utilities/users-service';

const NavBar = ({user, setUser}) => {
    const handleLogOut = () => {
        usersService.logOut();
        setUser(null);
    }
    return (
        <nav>
            <div> 
                Hello, <Link to="/profile/:id">{user.name}</Link> &nbsp;
                <Link to ='' onClick={handleLogOut}>
                    Log Out
                </Link>
            </div>
            <Link to="/games">All Games</Link>
            &nbsp; | &nbsp;
            <Link to="/games/new">Add Game</Link>
            &nbsp; | &nbsp;
            <Link to="/logs/new">New Review</Link>
        </nav>
    )
}

export default NavBar;