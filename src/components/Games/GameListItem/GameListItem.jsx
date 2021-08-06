import React from "react";
import { Link } from "react-router-dom";

const GameListItem = ({ gameItem, handleDeleteGame }) => {
  return (
    <>
      <div>
        <div className="item-content">
          <b>Game:</b> {gameItem.title} &nbsp; &nbsp; &nbsp; <b>Genre:</b> {gameItem.genre} &nbsp;
        </div>
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
          <button
            className="delete"
            onClick={() => handleDeleteGame(gameItem._id)}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default GameListItem;
