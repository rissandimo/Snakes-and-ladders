import React from "react";

import Square from "./Square";
import Dice from "./Dice";
import PlayerPiece from "./PlayerPiece";

function Board() {
  return (
    <>
      <div id="board">
        <Square number="50" /> <Square number="49" />
        <Square number="48" />
        <Square number="47" />
        <Square number="46" />
        <Square number="45" />
        <Square number="44" />
        <Square number="43" /> <Square number="42" />
        <Square number="41" />
        <Square number="40" /> <Square number="39" />
        <Square number="38" />
        <Square number="37" />
        <Square number="36" />
        <Square number="35" />
        <Square number="34" />
        <Square number="33" /> <Square number="32" />
        <Square number="31" />
        <Square number="30" />
        <Square number="29" />
        <Square number="28" />
        <Square number="27" />
        <Square number="26" />
        <Square number="25" />
        <Square number="24" />
        <Square number="23" /> <Square number="22" />
        <Square number="21" />
        <Square number="20" />
        <Square number="19" />
        <Square number="18" /> <Square number="17" />
        <Square number="16" />
        <Square number="15" /> <Square number="14" /> <Square number="13" />{" "}
        <Square number="12" /> <Square number="11" />
        <Square number="10" /> <Square number="9" /> <Square number="8" />{" "}
        <Square number="8" /> <Square number="6" />
        <Square number="5" /> <Square number="4" /> <Square number="3" />{" "}
        <Square number="2" /> <Square number="1" />
      </div>

      <div className="dice-container">
        <Dice />
      </div>

      <PlayerPiece />
    </>
  );
}

export default Board;
