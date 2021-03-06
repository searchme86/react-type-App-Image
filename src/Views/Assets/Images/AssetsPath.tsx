//import assets
import { lAssets } from "../../../Core/Interface/lData";
import logo from "./logo.png";
import RegisterBtn from "./Register.png";
import AlertBtn from "./Alert.png";
import NoUrl from "./NotFound.png";

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

export const NoMatch: lAssets = {
  name: "NotFound",
  info: {
    src: `${NoUrl}`,
    alt: "해당 url의 페이지가 없는 404 에러 이미지",
  },
};
