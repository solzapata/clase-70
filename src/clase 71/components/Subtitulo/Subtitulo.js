import React from "react";
import style from "./subtitulo.module.scss";

const Subtitulo = ({ children }) => {
  return (
    <div>
      <h2 className={style.subtitulo}>{children}</h2>
    </div>
  );
};

export default Subtitulo;
