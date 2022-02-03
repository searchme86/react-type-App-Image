import { PageContentWrapper } from "../Layout/layout.style";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const navigate = useNavigate();
  const onDismiss = () => {
    navigate(-1);
  };
  return (
    <>
      <PageContentWrapper>
        <h1>내가 작성한 글, 좋아요한 글, 작성한 댓글 보이는 페이지</h1>
        <br />
        <br />
        <button onClick={onDismiss}>이전으로 이동</button>
      </PageContentWrapper>
    </>
  );
}

export default Mypage;
