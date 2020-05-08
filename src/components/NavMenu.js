// NavMenu: crear un componente Nav que renderice un elemento nav y un elemento ul dentro del nav, el componente debe poder contener elementos dentro suyo. El elemento ul debe tener el estilo display: flex y list-style: none. El componente NavMenu debe aceptar la prop direction con los valores "row" o "column", siendo "row" el valor por defecto, y cambiar el valor de la propiedad flex-direction del elemento ul en consecuencia
import React from "react";

const NavMenu = ({ children, direction = "row" }) => {
  return (
    <nav>
      <ul
        style={{ display: "flex", listStyle: "none", flexDirection: direction }}
      >
        {children}
      </ul>
    </nav>
  );
};

export default NavMenu;
