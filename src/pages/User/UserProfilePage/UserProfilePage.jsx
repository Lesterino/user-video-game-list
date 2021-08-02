import UserData from "../../../components/User/UserData/UserData"
import UserLogs from "../../../components/User/UserLogs/UserLogs"
import { Link } from "react-router-dom";


const UserProfilePage = (props) => {
    return (
      <main>
        <h1>Profile</h1>
        <Link to=":userId/logs/newlog">New Log</Link> 
        <UserData />
        <UserLogs />

      </main>
    );
  };
  
  export default UserProfilePage;