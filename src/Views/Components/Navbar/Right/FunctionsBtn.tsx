import { Link } from "react-router-dom";
import { ButtonCommon } from "../../Button.style";
import { RNav, RnLi, RnList } from "./FunctionsBtn.style";

function FunctionsBtn() {
  return (
    <>
      <RNav>
        <RnList>
          <RnLi>
            <Link to="/home"></Link>
          </RnLi>
        </RnList>
      </RNav>
      <ButtonCommon>Log in</ButtonCommon>
    </>
  );
}

export default FunctionsBtn;
