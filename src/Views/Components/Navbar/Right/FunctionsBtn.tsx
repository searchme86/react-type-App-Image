import React from "react";
import { Link } from "react-router-dom";
import { Rcontainer, RNav, RnLi, RnList } from "./FunctionsBtn.style";

function FunctionsBtn() {
  return (
    <Rcontainer>
      <RNav>
        <RnList>
          <RnLi>
            <Link to="/home">
              <button>Login</button>
            </Link>
          </RnLi>
        </RnList>
      </RNav>
    </Rcontainer>
  );
}

export default FunctionsBtn;
