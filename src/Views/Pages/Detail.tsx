import { useParams } from "react-router-dom";
function Detail() {
  const { itemIdx } = useParams<string>();
  return (
    <div>
      <h1>{itemIdx}</h1>
      <h1>디테일 ㅇㅇㅇㅇㅇㅇㅇ페이지 입니다</h1>
    </div>
  );
}

export default Detail;
