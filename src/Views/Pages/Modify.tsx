import { PageContentWrapper } from "../Layout/layout.style";
import { Link } from "react-router-dom";

function Modify() {
  return (
    <>
      <PageContentWrapper>
        <h1>여기는 수정 페이지 입니다</h1>
        <div>
          <br />
          <br />
          <Link to="/">취소</Link>
          <br />
          <br />
          <Link to="/">수정</Link>
          <br />
          <br />
        </div>
      </PageContentWrapper>
    </>
  );
}

export default Modify;
