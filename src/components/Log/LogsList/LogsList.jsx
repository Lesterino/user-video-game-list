import UserLogItem from "../../User/UserLogItem/UserLogItem";

const LogsList = ({ logs, user }) => {
  const logsList = logs.map((log) => {
      return (
      // {if (user._id === log.user) {
      //   <p>{user.name}</p>
      // }}
        <UserLogItem
          key={log._id}
          logItem={log}
        />
      );
  });
  return <main>{logsList}</main>;
};

export default LogsList;