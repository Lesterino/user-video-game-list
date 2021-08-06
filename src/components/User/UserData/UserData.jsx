const DataUser = ({ user }) => {
  return (
    <>
      <div className="card">
        <img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"></img>
        <div className="card-container">
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </>
  );
};

export default DataUser;
