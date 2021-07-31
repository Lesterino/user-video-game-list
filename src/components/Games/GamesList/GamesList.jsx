import GameListItem from "../GameListItem/GameListItem";

const GameList = ({games, handleDeleteGame}) => {
    const gamesList = games.map((game) => {
        return (
            <GameListItem 
            handleDeleteGame={handleDeleteGame}
            key={game._id}
            gameItem={game}
            />
        );
    });
    return <main>{gamesList}</main>;
}

export default GameList;