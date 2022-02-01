import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Components/Popups/Modal";

function Register() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>듣고싶은음악을 넣어주세요</h1>
      <div>
        <input style={{ display: "inline-block" }} />
        <button style={{ display: "inline-block" }}>입력</button>
      </div>
      <button onClick={openModal}>취소</button>
      <button>작성</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        등록을 정말 취소하시겠습니까??
      </Modal>
      <Link to="/">홈으로</Link>
    </div>
  );
}

export default Register;
