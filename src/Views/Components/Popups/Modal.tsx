import { lModalProps } from "../../../Core/Interface/lModal";
import { Alert } from "../../Assets/Images/AssetsPath";
import { ModalCancel, ModalConfirm } from "../Button.style";
import { Img, ImgWrapper } from "../PIcture.style";
import {
  ModalButtons,
  ModalContent,
  ModalImgWrapper,
  ModalTitle,
  ModalWrapper,
} from "./Modal.style";

import { useNavigate } from "react-router-dom";

function Modal({ close }: lModalProps) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/home");
  };
  return (
    <ModalWrapper>
      <ModalImgWrapper>
        <ImgWrapper>
          <Img src={Alert.info.src} alt={Alert.info.alt} />
        </ImgWrapper>
      </ModalImgWrapper>
      <ModalContent>
        <ModalTitle>정말로 등록을 취소하시겠습니까?</ModalTitle>
        <ModalButtons>
          <ModalCancel onClick={redirect}>예</ModalCancel>
          <ModalConfirm onClick={close}>아니오</ModalConfirm>
        </ModalButtons>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
