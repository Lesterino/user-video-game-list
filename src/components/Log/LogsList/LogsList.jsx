import LogItem from "../LogItem/LogItem";

const LogsList = ({ logs, user }) => {
  const logsList = logs.map((log) => {
      return (
        <LogItem
          key={log._id}
          logItem={log}
        />
      );
  });
  return <main>{logsList}</main>;
};

export default LogsList;