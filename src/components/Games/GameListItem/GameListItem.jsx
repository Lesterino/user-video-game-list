import React from "react";
import { Link } from "react-router-dom";

const GameListItem = ({ gameItem, handleDeleteGame }) => {
  return (
    <>
      <div>
        <div>
          Title: {gameItem.title} &nbsp; Genre: {gameItem.genre} &nbsp;
          <div>
            <Link
              to={{
                pathname: "/game-details",
                state: { gameItem },
              }}
            >
              <button>Details</button> 
            </Link>
            &nbsp;
            <Link
              to={{
                pathname: "/edit",
                state: { gameItem },
              }}
            >
              <button>Edit</button> 
            </Link>
            &nbsp;
            <button className="delete" onClick={() => handleDeleteGame(gameItem._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default GameListItem;
