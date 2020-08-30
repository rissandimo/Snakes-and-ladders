import React, { useState } from "react";

import Square from "./Square";
import Dice from "./Dice";
import PlayerPiece from "./PlayerPiece";

function Board() {

                  // State

  // Player 1 Position
  const [p1bottom, setp1bottom] = useState('77px');
  const [p1right, setp1right] = useState('2rem');
  
  // Player 2 Position
  const [p2bottom, setp2bottom] = useState(0);
  const [p2right, setp2right] = useState(0);

  // Dice Rolled
  const [dice, setDice] = useState(0);

  // Active Players
  const [p1Active, setP1Active] = useState(true);
  const [p2Active, setP2Active] = useState(true);

  const movePlayer = () => {
    if(p1Active){
      console.log("Player 1 active");
    }else{
      console.log("Player 2 active");
    }
  }

  // setp1bottom('77px');
  // setp1right('14px');

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

        <PlayerPiece color="blue" player='player1' p1right={p1right} p1bottom={p1bottom} />
        {/* <PlayerPiece color="red" player='player2' p2right='60px' p2bottom='77px' /> */}
      </div>

      <div className="dice-container">
        <Dice 
            setDice={setDice}
            p1right={p1right}
            p2right={p2right}
              p1Active={true}
              p2Active={false}
              setp1bottom={setp1bottom}
              setp1right={setp1right}
              setp2bottom={setp2bottom}
              setp2right={setp2right}
               />
      </div>

    </>
  );
}

export default Board;
