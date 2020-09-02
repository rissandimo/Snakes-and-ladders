import React, { useState, Fragment } from "react";
import "./../App.css";
import img1 from "./../img/1.png";
import img2 from "./../img/2.png";
import img3 from "./../img/3.png";
import img4 from "./../img/4.png";
import img5 from "./../img/5.png";
import img6 from "./../img/6.jpg";

export default function Dice( { setDice, setp1bottom, setp1right, setp2bottom, setp2right, p1Active, p2Active, p1right, p12right }) {

  const [getImg, setImg] = useState(img1);
  const [p1Right, setp1Right] = useState(0.5);

  const rollDice = () => {
    let number = Math.floor(Math.random() * (7 - 1)) + 1;
    
    switch (number) {
      case 1:
        setImg(img1);
        break;
      case 2:
        setImg(img2);
        break;
      case 3:
        setImg(img3);
        break;
      case 4:
        setImg(img4);
        break;

      case 5:
        setImg(img5);
        break;

      default:
        setImg(img6);
        break;
    }

        if(p1Active){
      
      console.log(p1Right);
      setp1Right(p1Right + 6.5)
      const updatedRight = p1Right + 'rem';
      console.log(updatedRight);

     setp1right(updatedRight);
    }
    
  };
  return (
    <Fragment>
    <button className="dice-logo" onClick={rollDice}>Roll Dice</button>
    <div>
      <img className="dice" src={getImg}></img>
    </div>

    </Fragment>
  );
}
