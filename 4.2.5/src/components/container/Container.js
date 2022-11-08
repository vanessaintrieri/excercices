import { useState } from "react";
import Square from "../square/square";
import "./Container.scss";

const colors=[
  "bg.black",
  "bg-green",
  "bg-yellow",
  "bg-red",
  "bg-blue"
]


const Container = () => {

  const [color, setColor]=useState("bg-black");
  const handleClick=()=>{
    let randomNum=Math.floor(Math.random()* colors.length);
    setColor(colors[randomNum])
  }

  return <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
    <Square backgroundColor={color}  onClick={handleClick}></Square>
  </div>;
};

export default Container