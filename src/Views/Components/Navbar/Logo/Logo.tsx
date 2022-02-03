// import { Link } from "react-router-dom";
import { LogoImage } from "../../../Assets/Images/AssetsPath";
import { DivLinkWrapper, Img, ImgWrapper } from "../../PIcture.style";
import { LogoWrapper } from "./Logo.style";

function Logo() {
  return (
    <LogoWrapper>
      <DivLinkWrapper to="/">
        <ImgWrapper>
          <Img src={LogoImage.info.src} alt={LogoImage.info.alt} />
        </ImgWrapper>
      </DivLinkWrapper>
    </LogoWrapper>
  );
}

export default Logo;
