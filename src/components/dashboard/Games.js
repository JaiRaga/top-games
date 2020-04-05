import React, { useEffect, useState, Fragment } from "react";
import Game from "./Game";
import Spinner from "../layout/Spinner";
import axios from "axios";

const Games = () => {
  let [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get("http://starlord.hackerearth.com/TopSellingGames")
      .then((res) => setGames(res.data));
  }, []);
  return (
    <div className="">
      {games.length === 0 ? (
        <Spinner className="continer-fluid" />
      ) : (
        games.map((game) => <Game key={game.Rank} game={game} />)
      )}
    </div>
  );
};

export default Games;
