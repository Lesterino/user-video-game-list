import UserLogItem from "../UserLogItem/UserLogItem";

const UserLogs = ({ handleDeleteLog, logs, user }) => {
  const logsList = logs.map((log) => {
    if (user._id === log.user) {
      return (
        <UserLogItem
          handleDeleteLog={handleDeleteLog}
          key={log._id}
          logItem={log}
        />
      );
    }
  });
  return <main>{logsList}</main>;
};

export default UserLogs;
