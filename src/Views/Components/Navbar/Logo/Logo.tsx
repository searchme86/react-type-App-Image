import React from "react";
import { Link } from "react-router-dom";

// import picture from "../../../Static/Images/image-png.png";
import Images from "../../../Static/Images";

function Logo() {
  return (
    <div style={{ border: "solid" }}>
      <h1>
        <Link to="/">
          <img src={Images.yes} />
        </Link>
      </h1>
      {/* <span className="ddd">로고이미지설명</span> */}
    </div>
  );
}

export default Logo;
