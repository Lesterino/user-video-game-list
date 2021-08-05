import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const genreEnum = [
  "Action",
  "Adventure",
  "RPG",
  "Simulation",
  "Strategy",
  "Sports",
  "MMO",
];

const EditGamePage = ({ handleUpdateGame }) => {
  const location = useLocation();

  const [invalidForm, setValidForm] = useState(true);
  const [editedGame, setEditedGame] = useState(location.state.gameItem);

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [editedGame]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateGame(editedGame);
  };

  const handleChange = (e) => {
    setEditedGame({
      ...editedGame,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Edit Game</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label>Game Title</label>
          <input
            name="title"
            value={editedGame.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre</label>
          <select name="genre" value={editedGame.genre} onChange={handleChange}>
            {genreEnum.map((genre) => {
              return <option value={genre}>{genre}</option>;
            })}
            ;
          </select>
        </div>
        <button type="submit" disabled={invalidForm}>
          SAVE GAME
        </button>
        &nbsp;&nbsp;
        <Link to="/games"><button className="delete">CANCEL</button></Link>
      </form>
    </>
  );
};

export default EditGamePage;
