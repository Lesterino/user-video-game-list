import {DataUser} from "../../../components/User/DataUser/DataUser"
import {LogsUser} from "../../../components/User/LogsUser/LogsUser"


const UserProfilePage = (props) => {
    return (
      <main>
        <h1>Profile</h1>
        <DataUser />
        <LogsUser />

      </main>
    );
  };
  
  export default UserProfilePage;