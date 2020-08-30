import React, { useState, Fragment } from "react";
import "./../App.css";
import img1 from "./../img/1.png";
import img2 from "./../img/2.png";
import img3 from "./../img/3.png";
import img4 from "./../img/4.png";
import img5 from "./../img/5.png";
import img6 from "./../img/6.jpg";

export default function Dice() {
  const [getImg, setImg] = useState(img1);
  const number = () => {
    let number = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log(number);
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
  };
  return (
    <Fragment>
    <button className="dice-logo" onClick={number}>Roll Dice</button>
    <div>
      <img className="dice" src={getImg}></img>
    </div>

    </Fragment>
  );
}
