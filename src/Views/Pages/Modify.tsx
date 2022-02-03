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
          <p>취소버튼, 수정을 하지 않는 다는 의미</p>
          <p>이전 페이지로 이동한다는 의미</p>
          <br />
          <br />
          <button onClick={onDismiss}>수정</button>
          <p>페이지 내용이 수정되고</p>
          <p>페이지 수정된 상태로 이전으로 이동</p>
          <br />
          <br />
        </div>
      </PageContentWrapper>
    </>
  );
}

export default Modify;
