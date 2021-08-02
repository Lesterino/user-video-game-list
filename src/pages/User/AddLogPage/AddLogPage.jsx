import React, { useState, useRef, useEffect } from "react";

const ratingArr = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']


const AddLogPage = ({ handleAddLog }) => {
  const [invalidForm, setValidForm] = useState(true);
  const [newLog, setNewLog] = useState({
    game: {},
    rating: 0,
    review: "",
    user: {}
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

  const handleChangeInput = (e) => {
    setNewLog({
      ...newLog,
      [e.target.game]: e.target.value,
    });
  };

  const handleChangeSelect = (e) => {
    setNewLog({
      ...newLog,
      rating: e.target.value,
    });
  };

  return (
    <>
      <h1>Add Log</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Game</label>
          <input
            game="game"
            value={newLog.game}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label>Rating</label>
          <select
            rating="rating"
            value={newLog.rating}
            onChange={handleChangeSelect}
          >
            {ratingArr.map((rating) => {
              return <option value={rating}>{rating}</option>;
            })}
          </select>
        </div>
        <button type="submit" disabled={invalidForm}>
          ADD GAME
        </button>
      </form>
    </>
  );
};

export default AddLogPage;
