import UserData from "../../../components/User/UserData/UserData"
import UserLogs from "../../../components/User/UserLogs/UserLogs"


const UserProfilePage = (props) => {
    return (
      <main>
        <h1>Profile</h1>
        <UserData />
        <UserLogs />

      </main>
    );
  };
  
  export default UserProfilePage;