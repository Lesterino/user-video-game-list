import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

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

  const handleChangeInput = (e) => {
    setEditedGame({
      ...editedGame,
      [e.target.title]: e.target.value,
    });
  };

  const handleChangeSelect = (e) => {
    setEditedGame({
      ...editedGame,
      genre: e.target.value,
    });
  };

  return (
    <>
      <h1>Edit Game</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label>Game Title</label>
          <input
            title="title"
            value={editedGame.title}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label>Genre</label>
          <select
            genre="genre"
            value={editedGame.genre}
            onChange={handleChangeSelect}
          >
            {/* {genreEnum.forEach((genre) => {
              <option value={genre}>{genre}</option>
            })}; */}
            <option value="Action">Action</option>;
            <option value="Adventure">Adventure</option>;
            <option value="RPG">RPG</option>;
            <option value="Simulation">Simulation</option>;
            <option value="Strategy">Strategy</option>;
            <option value="Sports">Sports</option>;
            <option value="MMO">MMO</option>;
          </select>
        </div>
        <button type="submit" disabled={invalidForm}>
          SAVE GAME
        </button>
        &nbsp;&nbsp;
        <Link to="/">CANCEL</Link>
      </form>
    </>
  );
};

export default EditGamePage;
