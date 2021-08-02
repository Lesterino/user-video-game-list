import UserLogItem from "../UserLogItem/UserLogItem"

const UserLogs = ({handleDeleteLog, logs}) => {
    const logsList = logs.map((log) => {
        return (
            <UserLogItem 
            handleDeleteLog={handleDeleteLog}
            key={log._id}
            logItem={log}
            />
        );
    });
    return <main>{logsList}</main>;
}

export default UserLogs;