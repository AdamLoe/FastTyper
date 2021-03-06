import React from "react";

let MenuHeader = ({ gotoBrowser, gotoCreator }) => (
  <div className="HeaderButtons">
    <button onClick={gotoBrowser}>View Games</button>
    <button onClick={gotoCreator}>Create Game</button>
  </div>
);

export default MenuHeader;
