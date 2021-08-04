import React, { useState, useRef, useEffect } from "react";

const ratingArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const AddLogPage = ({ handleAddLog, games, user }) => {
  const [invalidForm, setValidForm] = useState(true);
  const [newLog, setNewLog] = useState({
    game: '',
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

  const handleChange = (e) => {
    setNewLog({
      ...newLog,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Add Log</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Game</label>
          <select
            name="game"
            value={newLog.game}
            onChange={handleChange}
            required
          >
            {games.map((game) => {
              return <option value={game.title}>{game.title}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Rating</label>
          <select
            name="rating"
            value={newLog.rating}
            onChange={handleChange}
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
            name="review"
            value={newLog.review}
            onChange={handleChange}
          />
        </div>
        <input type="hidden" name="user" value={newLog.user} />
        <button type="submit" disabled={invalidForm}>
          ADD LOG
        </button>
      </form>
    </>
  );
};

export default AddLogPage;
