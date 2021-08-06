import { Link } from "react-router-dom";

const LogListItem = ({ handleDeleteLog, logItem }) => {
  return (
    <>
      <div>
        <div className="item-content">
          Title: {logItem.game} <br />
          Rating: {logItem.rating} <br />
          Review: {logItem.review} <br />
        </div>
        <div>
          <Link
            to={{
              pathname: "/user/logs/details",
              state: { logItem },
            }}
          >
            <button>Details</button>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/user/logs/edit",
              state: { logItem },
            }}
          >
            <button>Edit</button>
          </Link>
          &nbsp;
          <button
            className="delete"
            onClick={() => handleDeleteLog(logItem._id)}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default LogListItem;
