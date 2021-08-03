import React, { useState, useRef, useEffect } from "react";

const genreEnum = [
  "Action",
  "Adventure",
  "RPG",
  "Simulation",
  "Strategy",
  "Sports",
  "MMO",
];

const AddGamePage = ({ handleAddGame }) => {
  const [invalidForm, setValidForm] = useState(true);
  const [newGame, setNewGame] = useState({
    title: "",
    genre: "Action",
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

  const handleChange = (e) => {
    setNewGame({
      ...newGame,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Add Game</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Game Title</label>
          <input
            name="title"
            value={newGame.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Game Genre</label>
          <select
            name="genre"
            value={newGame.genre}
            onChange={handleChange}
            required
          >
            {genreEnum.map((genre) => {
              return <option value={genre}>{genre}</option>;
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

export default AddGamePage;
