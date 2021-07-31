import GamesList from "../../../components/Games/GamesList/GamesList";

const AllGamesPage = ({ games, handleDeleteGame }) => {
  return (
    <>
      <h1> All Games </h1>
      <GamesList games={games} handleDeleteGame={handleDeleteGame} />
    </>
  );
};

export default AllGamesPage;