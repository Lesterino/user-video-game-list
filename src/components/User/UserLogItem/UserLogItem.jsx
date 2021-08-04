import {Link} from 'react-router-dom';

const LogListItem = ({ handleDeleteLog, logItem }) => {
    return (
      <>
        <div>
          <div>
            Title: {logItem.game} <br />
            Rating: {logItem.rating} <br />
            Review: {logItem.review} <br />
            Author ID: {logItem.user} <br />
            <div>
                
              <Link
                to={{
                  pathname: "/user/logs/details",
                  state: { logItem },
                }}
              >
                Details
              </Link>
              <Link
                to={{
                  pathname: "/user/logs/edit",
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
  