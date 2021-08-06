import { Link } from "react-router-dom";
import * as usersService from "../../../utilities/users-service";

const NavBar = ({ user, setUser }) => {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };
  return (
    <nav className="nav-content">
      Welcome, <b>{user.name}</b> &nbsp; | &nbsp;
      <Link to="/games">All Games</Link>
      &nbsp; | &nbsp;
      <Link to="/logs">All Logs</Link>
      &nbsp; | &nbsp;
      <Link to="/user">Profile</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      &nbsp;
    </nav>
  );
};

export default NavBar;
