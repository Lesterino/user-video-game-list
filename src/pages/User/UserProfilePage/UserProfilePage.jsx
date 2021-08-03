import UserData from "../../../components/User/UserData/UserData"
import UserLogs from "../../../components/User/UserLogs/UserLogs"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as logsAPI from "../../../utilities/logs-api"


const UserProfilePage = ({handleDeleteLog, logs, user}) => {
  
  // useEffect(() => {
  //   const getLogs = async () => {
  //     const logs = await logsAPI.getAll();
  //     console.log(logs);
  //     setLogs(logs);
  //   };
  //   getLogs();
  // }, []);
    return (
      <main>
        <h1>Profile</h1>
        <Link to="user/logs/newlog">New Log</Link> 
        <UserData user={user} />
        <UserLogs handleDeleteLog={handleDeleteLog} logs={logs} />

      </main>
    );
  };
  
  export default UserProfilePage;