//import assets
import { lAssets } from "../../../Core/Interface/lData";
import logo from "./logo.png";
import RegisterBtn from "./Register.png";
import AlertBtn from "./Alert.png";

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

export const Alert: lAssets = {
  name: "Alert",
  info: {
    src: `${AlertBtn}`,
    alt: "경고 이미지",
  },
};
