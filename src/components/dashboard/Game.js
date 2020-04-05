import React from "react";

const Game = ({ game }) => {
  let { Name, Platform, Publisher, Year } = game;

  return (
    <div className="text-center card bg-dark text-light p-4 m-4">
      <h1>{Name}</h1>
      <h4>{Publisher}</h4>
      <h4>{Platform}</h4>
      <h5>{Year}</h5>
    </div>
  );
};

export default Game;
