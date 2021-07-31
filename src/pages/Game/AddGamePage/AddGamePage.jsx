import React, { useState, useRef, useEffect } from "react";

// const genreEnum = [
//   "Action",
//   "Adventure",
//   "RPG",
//   "Simulation",
//   "Strategy",
//   "Sports",
//   "MMO",
// ];

const AddGamePage = ({ handleAddGame }) => {
  const [invalidForm, setValidForm] = useState(true);
  const [newGame, setNewGame] = useState({
    title: "",
    genre: "",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGame(newGame);
    setNewGame(newGame);
  };

  const handleChangeInput = (e) => {
    setNewGame({
      ...newGame,
      [e.target.title]: e.target.value,
    });
  };
  
  const handleChangeSelect = (e) => {
    setNewGame({
      ...newGame,
      genre: e.target.value,
    });
  };
  

  return (
    <>
      <h1>Add Game</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Game Title</label>
          <input
            title="title"
            value={newGame.title}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div>
          <label>Game Genre</label>
          <select genre="genre" value={newGame.genre} onChange={handleChangeSelect}>
            {/* {genreEnum.forEach((genre) => {
              <option value={genre}>{genre}</option>
            })}; */}
              <option value='Action'>Action</option>;
              <option value='Adventure'>Adventure</option>;
              <option value='RPG'>RPG</option>;
              <option value='Simulation'>Simulation</option>;
              <option value='Strategy'>Strategy</option>;
              <option value='Sports'>Sports</option>;
              <option value='MMO'>MMO</option>;
          
          </select>
        </div>
        <button type="submit" disabled={invalidForm}>
          ADD GAME
        </button>
      </form>
    </>
  );
};

export default AddGamePage;
