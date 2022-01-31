import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div style={{ border: "solid" }}>
      <h1>
        <Link to="/">
          <div>
            <img alt="ddd" />
          </div>
        </Link>
      </h1>
      {/* <span className="ddd">로고이미지설명</span> */}
    </div>
  );
}

export default Logo;
