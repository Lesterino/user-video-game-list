import LogsList from "../../../components/Log/LogsList/LogsList"
import { Link } from "react-router-dom";

const AllLogsPage = ({ logs }) => {
  return (
    <>
      <h1> All Logs </h1>
      <hr />
      <main className="logsList">
      <LogsList logs={logs} />
    </main>
    </>
  );
};

export default AllLogsPage;