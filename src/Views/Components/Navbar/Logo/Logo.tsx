import React from "react";
import { Link } from "react-router-dom";

import picture from "../../../Static/Images/image";

function Logo() {
  console.log(picture);
  return (
    <div style={{ border: "solid" }}>
      <h1>
        <Link to="/">
          <div></div>
        </Link>
      </h1>
      {/* <span className="ddd">로고이미지설명</span> */}
    </div>
  );
}

export default Logo;
