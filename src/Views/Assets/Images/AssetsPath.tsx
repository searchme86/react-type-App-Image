//import assets
import { lAssets } from "../../../Core/Interface/lData";
import logo from "./logo.png";
import RegisterBtn from "./Register.png";

//export a group of assests
export const LogoImage: lAssets = {
  name: "logo",
  info: {
    src: `${logo}`,
    alt: "메인 로고 이미지",
  },
};

export const Register: lAssets = {
  name: "Register",
  info: {
    src: `${RegisterBtn}`,
    alt: "아이템 등록하기",
  },
};
