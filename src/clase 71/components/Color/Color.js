import React from "react";
import style from "./color.module.scss";

const Color = () => {
  return (
    <div>
      <div className={`${style.cuadrado} ${style.cuadradoGrey}`}></div>
      <div className={`${style.cuadrado} ${style.cuadradoYellow}`}></div>
      <div className={`${style.cuadrado} ${style.cuadradoGreen}`}></div>
      <div className={`${style.cuadrado} ${style.cuadradoBlue}`}></div>
      <div className={`${style.cuadrado} ${style.cuadradoPink}`}></div>
    </div>
  );
};

export default Color;
