import React from "react";
import { Link } from "react-router-dom";

const GameListItem = ({ gameItem, handleDeleteGame }) => {
  return (
    <>
      <div>
        <div>
          Title: {gameItem.title} &nbsp; Genre: {gameItem.genre} &nbsp;
          <div>
            {/* <Link
              to={{
                pathname: "/details",
                state: { gameItem },
              }}
            >
              Details
            </Link>
            <Link
              to={{
                pathname: "/edit",
                state: { gameItem },
              }}
            >
              &nbsp;Edit
            </Link> */}
            <button onClick={() => handleDeleteGame(gameItem._id)}>
              &nbsp;Delete
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default GameListItem;
