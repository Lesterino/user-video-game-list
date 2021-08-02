import React, { useState, useRef, useEffect } from "react";

const ratingArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const AddLogPage = ({ handleAddLog, games, user }) => {
  const [invalidForm, setValidForm] = useState(true);
  const [newLog, setNewLog] = useState({
    game: games[0],
    rating: "1",
    review: "",
    user: user,
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddLog(newLog);
    setNewLog(newLog);
  };

  const handleChangeGame = (e) => {
    setNewLog({
      ...newLog,
      game: e.target.value,
    });
  };

  const handleChangeRating = (e) => {
    setNewLog({
      ...newLog,
      rating: e.target.value,
    });
  };

  const handleChangeReview = (e) => {
    setNewLog({
      ...newLog,
      review: e.target.value,
    });
  };

  return (
    <>
      <h1>Add Log</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Game</label>
          <select
            game="game"
            value={newLog.game}
            onChange={handleChangeGame}
            required
          >
            {games.map((game) => {
              return <option value={game}>{game.title}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Rating</label>
          <select
            rating="rating"
            value={newLog.rating}
            onChange={handleChangeRating}
            required
          >
            {ratingArr.map((rating) => {
              return <option value={rating}>{rating}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Review:</label>
          <input
            review="review"
            value={newLog.review}
            onChange={handleChangeReview}
          />
        </div>
        <input type="hidden" user="user" value={newLog.user} />
        <button type="submit" disabled={invalidForm}>
          ADD LOG
        </button>
      </form>
    </>
  );
};

export default AddLogPage;
