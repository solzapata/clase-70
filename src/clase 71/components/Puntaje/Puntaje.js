import React from "react";
import { AiFillStar } from "react-icons/ai";
import style from "./puntaje.module.scss";

const Puntaje = () => {
  return (
    <div>
      <AiFillStar className={style.puntaje} />
      <AiFillStar className={style.puntaje} />
      <AiFillStar className={style.puntaje} />
      <AiFillStar className={style.puntaje} />
      <AiFillStar className={style.puntaje} />
    </div>
  );
};

export default Puntaje;
