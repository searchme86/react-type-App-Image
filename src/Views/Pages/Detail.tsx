import { useState } from "react";
import { useParams } from "react-router-dom";
import { PageContentWrapper } from "../Layout/layout.style";
import Dim from "../Components/Popups/Dim";
import Modal from "../Components/Popups/Modal";

function Detail() {
  const { itemIdx } = useParams<string>();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <PageContentWrapper>
        <h1>{itemIdx}</h1>
        <h1>메인 페이지에서 아이템 클릭 시, 이동한 Detail Page 입니다</h1>
        <div></div>
        <div>추천음악 슬라이더 부분입니다</div>
        <div>
          댓글을 입력하는 공간입니다
          <button onClick={openModal}>신고</button>
        </div>
        <>
          {modalOpen && <Dim />}
          {modalOpen && <Modal close={closeModal}>테스트 중입니다</Modal>}
        </>
      </PageContentWrapper>
    </>
  );
}

export default Detail;
