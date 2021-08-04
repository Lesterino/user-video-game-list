import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const ratingArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const EditLogPage = ({ handleUpdateLog, games }) => {
  const location = useLocation();

  const [invalidForm, setValidForm] = useState(true);
  const [editedLog, setEditedLog] = useState(location.state.logItem);

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [editedLog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateLog(editedLog);
  };

  const handleChange = (e) => {
    setEditedLog({
      ...editedLog,
      [e.target.name]: e.target.value,
    }); 
  };


  return (
    <>
      <h1>Edit Log</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Game</label>
          <select
            name="game"
            value={editedLog.game}
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
            value={editedLog.rating}
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
            value={editedLog.review}
            onChange={handleChange}
          />
        </div>
        <input type="hidden" name="user" value={editedLog.user} />
        <button type="submit" disabled={invalidForm}>
          EDIT LOG
        </button>
        &nbsp;&nbsp;
        <Link to="/user">CANCEL</Link>
      </form>
    </>
  );
};

export default EditLogPage;
