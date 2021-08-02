import {Link} from 'react-router-dom';

const LogListItem = ({ handleDeleteLog, logItem }) => {
    return (
      <>
        <div>
          <div>
            Title: {logItem.game} <br />
            Rating: {logItem.rating} <br />
            Review: {logItem.review} <br />
            <div>
                
              <Link
                to={{
                  pathname: "/details",
                  state: { logItem },
                }}
              >
                Details
              </Link>
              <Link
                to={{
                  pathname: "/edit",
                  state: { logItem },
                }}
              >
                &nbsp;Edit
              </Link>
              &nbsp;
              <button onClick={() => handleDeleteLog(logItem._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  };
  
  export default LogListItem;
  