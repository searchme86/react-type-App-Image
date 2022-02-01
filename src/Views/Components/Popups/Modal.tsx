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

function Modal({ open, close }: lModalProps) {
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
          <ModalCancel onClick={close}>아니오</ModalCancel>
          <ModalConfirm onClick={open}>예</ModalConfirm>
        </ModalButtons>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
