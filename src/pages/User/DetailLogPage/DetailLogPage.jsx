import React from "react";
import UserLogDetail from "../../../components/User/UserLogDetail/UserLogDetail";
import { useLocation } from "react-router-dom";

const LogDetailPage = () => {
  const {
    state: { logItem },
  } = useLocation();
  return (
    <>
      <h1>Log Details</h1>
      <UserLogDetail log={logItem} key={logItem._id} />
    </>
  );
}

export default LogDetailPage;
