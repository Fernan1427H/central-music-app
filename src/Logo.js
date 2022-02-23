import React from "react";
import Logo from "./images/Vector.png";
import carrito from "./images/carrito.png";
import login from "./images/login.png";

const Logo = () => {
  return (
    <div>
      <img src={Logo} alt="Logo"></img>
      <p>
        Central<span>Music</span>
      </p>
      <nav>
        <a>Guitars</a>
        <a>Accesories</a>
        <a>Storage</a>
        <a>Lessons</a>
        <a>Repairs</a>
      </nav>
      <div>
        <img src={carrito} alt="carrito"></img>
        <img src={login} alt="login"></img>
      </div>
    </div>
  );
};

export default Logo;
