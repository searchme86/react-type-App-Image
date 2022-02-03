import { useParams } from "react-router-dom";
import { PageContentWrapper } from "../Layout/layout.style";

function Detail() {
  const { itemIdx } = useParams<string>();
  return (
    <>
      <PageContentWrapper>
        <h1>{itemIdx}</h1>
        <h1>디테일 ㅇㅇㅇㅇㅇㅇㅇ페이지 입니다</h1>
      </PageContentWrapper>
    </>
  );
}

export default Detail;
