import React from "react";
import Search from "./Search";
import Games from "../dashboard/Games";
import "./Index.css";

const Index = () => {
  return (
    <div className="index">
      <Search />
      <Games />
    </div>
  );
};

export default Index;
