import React from "react";
import style from "./descripcion.module.scss";

const Descripcion = ({ children }) => {
  return (
    <div>
      <p className={style.descripcion}>{children}</p>
    </div>
  );
};

export default Descripcion;
