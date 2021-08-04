const DataUser = ({ user }) => {
    return (
        <>
        <h3>Email: {user.email}</h3>
        <h3>Name: {user.name}</h3>
        </>
    )
}

export default DataUser;