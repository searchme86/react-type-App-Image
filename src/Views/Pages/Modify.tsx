import { PageContentWrapper } from "../Layout/layout.style";
import { useNavigate } from "react-router-dom";

function Modify() {
  const navigate = useNavigate();
  const onDismiss = () => {
    navigate(-1);
  };
  return (
    <>
      <PageContentWrapper>
        <h1>여기는 수정 페이지 입니다</h1>
        <div>
          <br />
          <br />
          <button onClick={onDismiss}>취소</button>
          <br />
          <br />
          <button onClick={onDismiss}>수정</button>

          <br />
          <br />
        </div>
      </PageContentWrapper>
    </>
  );
}

export default Modify;
