import React from "react";
import Titulo from "./components/Titulo/Titulo";
import Subtitulo from "./components/Subtitulo/Subtitulo";
import Puntaje from "./components/Puntaje/Puntaje";
import Descripcion from "./components/Descripcion/Descripcion";
import Color from "./components/Color/Color";
import Size from "./components/Size/Size";

const App = () => {
  return (
    <div>
      <Titulo>THE FLYEASE JOURNEY</Titulo>
      <Subtitulo>MEN TRAINING SHOES</Subtitulo>
      <Puntaje />
      <Descripcion>Lorem ipsum...</Descripcion>
      <Subtitulo>Color</Subtitulo>
      <Color />
      <Subtitulo>Size</Subtitulo>
      <Size />
    </div>
  );
};

export default App;
