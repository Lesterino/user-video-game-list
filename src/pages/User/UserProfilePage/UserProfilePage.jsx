import UserData from "../../../components/User/UserData/UserData";
import UserLogs from "../../../components/User/UserLogs/UserLogs";
import { Link } from "react-router-dom";

const UserProfilePage = ({ handleDeleteLog, logs, user }) => {
  return (
    <main>
      <h1>Profile</h1>
      <UserData user={user} />
      <h2> Logs </h2>
      <Link to="user/logs/newlog"><button className="newBtn">New Log</button></Link> <br /> <br />
      <UserLogs handleDeleteLog={handleDeleteLog} logs={logs} user={user} />
    </main>
  );
};

export default UserProfilePage;
