import React from "react";
import GameDetail from "../../../components/Games/GameDetail/GameDetail";
import { useLocation } from "react-router-dom";

const GameDetailPage = () => {
  const {
    state: { gameItem },
  } = useLocation();
  return (
    <>
      <h1>Game Details</h1>
      <GameDetail game={gameItem} key={gameItem._id} />
    </>
  );
}

export default GameDetailPage;
