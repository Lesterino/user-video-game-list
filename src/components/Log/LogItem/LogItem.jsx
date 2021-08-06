import { Link } from "react-router-dom";

const LogListItem = ({ logItem }) => {
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
        </div>
      </div>
      <hr />
    </>
  );
};

export default LogListItem;
