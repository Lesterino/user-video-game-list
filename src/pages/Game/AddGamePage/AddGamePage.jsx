import React, { useState, useRef, useEffect } from "react";

const AddGamePage = ({ handleAddGame }) => {
  const [invalidForm, setValidForm] = useState(true);
  const [newGame, setNewGame] = useState({
    title: '',
    genre: 'Action',
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
      [e.target.title]: e.target.value,
    });
  };

  return (
    <>
      <h1>Add Game</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Game Title</label>
          <input title="title" value={newGame.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Game Genre</label>
          {/* <input
            className="form-control"
            name="genre"
            value={newGame.genre}
            onChange={handleChange}
            required
          /> */}
          <select genre="genre" onChange={handleChange}>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Simulation">Simulation</option>
            <option value="Strategy">Strategy</option>
            <option value="Sports">Sports</option>
            <option value="MMO">MMO</option>
          </select>
        </div>
        <button type="submit" className="btn" disabled={invalidForm}>
          ADD GAME
        </button>
      </form>
    </>
  );
};

export default AddGamePage;
