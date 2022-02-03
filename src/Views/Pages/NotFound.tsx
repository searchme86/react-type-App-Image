import { PageContentWrapper } from "../Layout/layout.style";
import { ImgWrapper, Img } from "../Components/PIcture.style";
import { NoMatch } from "../Assets/Images/AssetsPath";

function NotFound() {
  return (
    <>
      <PageContentWrapper>
        <h1>해당 페이지를 찾을 수 없습니다.</h1>
        <ImgWrapper>
          <Img src={NoMatch?.info?.src} alt={NoMatch?.info?.alt} />
        </ImgWrapper>
        <button>메인화면으로 이동</button>
      </PageContentWrapper>
    </>
  );
}

export default NotFound;
