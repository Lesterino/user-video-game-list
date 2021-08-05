import GamesList from "../../../components/Games/GamesList/GamesList";
import { Link } from "react-router-dom";

const AllGamesPage = ({ games, handleDeleteGame }) => {
  return (
    <>
      <h1> All Games </h1>
      <Link to="/games/new"><button className="newBtn">New Game</button></Link>
      <hr />
      <main className="gamesList">
      <GamesList games={games} handleDeleteGame={handleDeleteGame} />
    </main>
    </>
  );
};

export default AllGamesPage;