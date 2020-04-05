import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "../dashboard/SearchResult";

const Search = ({ games }) => {
  const [Games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://starlord.hackerearth.com/TopSellingGames")
      .then((res) => setGames(res.data));
  }, []);

  const [userInput, setUserInput] = useState("");
  const [game, setGame] = useState("");

  //   setGames(games);

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(userInput);

    const found = Games.find((game) => {
      return game.Name.toLowerCase() === userInput.toLowerCase();
    });
    // console.log(found);
    setGame(found);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Search Your Favourite Game
      </h1>
      <p className="lead text-center">
        Get the scores and ratings of your favourite games!
      </p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Get It
        </button>
      </form>
      {game && <SearchResult game={game} />}
    </div>
  );
};

export default Search;
