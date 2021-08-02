import UserData from "../../../components/User/UserData/UserData"
import UserLogs from "../../../components/User/UserLogs/UserLogs"
import { Link } from "react-router-dom";


const UserProfilePage = ({handleDeleteLog, logs, user}) => {
    return (
      <main>
        <h1>Profile</h1>
        <Link to=":userId/logs/newlog">New Log</Link> 
        <UserData user={user} />
        <UserLogs handleDeleteLog={handleDeleteLog} logs={logs} />

      </main>
    );
  };
  
  export default UserProfilePage;