import React from "react";

import imgFB from "../assets/facebook-1.png";
import imgAvatar from "../assets/avatar.jpeg";

function Header() {
  return (
    <div className="header">
      <img src={imgFB} />
      <div className="profile">
        <div>Meu perfil</div>
        <img src={imgAvatar}></img>
      </div>
    </div>
  );
}

export default Header;
