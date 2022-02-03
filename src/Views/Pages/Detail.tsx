import { Link, useParams } from "react-router-dom";
import { PageContentWrapper } from "../Layout/layout.style";

function Detail() {
  const { itemIdx } = useParams<string>();

  return (
    <>
      <PageContentWrapper>
        <h1>{itemIdx}</h1>
        <h1>메인 페이지에서 아이템 클릭 시, 이동한 Detail Page 입니다</h1>
        <div>
          <br />
          <br />
          <Link to="/modify">수정</Link>
          <p>수정 버튼을 누르면, 수정 페이지로 이동합니다.</p>
          <br />
          <br />
          <Link to="/">삭제</Link>
          <p>삭제버튼을 누르면 어떻게 해야하나요,,,,,</p>
          <br />
          <br />
          <Link to="/Mypage">나의 히스토리</Link>
          <p>내가 작성한 모든 글의 히스토리를 볼 수 있습니다.</p>
          <br />
          <br />
        </div>
        <div>추천음악 슬라이더 부분입니다</div>
        <div>
          댓글을 입력하는 공간입니다
          <button>신고</button>
        </div>
      </PageContentWrapper>
    </>
  );
}

export default Detail;
