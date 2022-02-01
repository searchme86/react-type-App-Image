import React from "react";
import { Link } from "react-router-dom";
import { LogoImage } from "../../../Assets/Images/AssetsPath";

function Logo() {
  return (
    <div>
      <h1>
        <Link to="/">
          <img src={LogoImage.info.src} alt={LogoImage.info.alt} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
