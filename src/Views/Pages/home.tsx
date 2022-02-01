import { useNavigate } from "react-router-dom";
import { CircleBtn } from "../Components/Button.style";

function Home() {
  let navigate = useNavigate();
  const moveRegister = (): void => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Home 입니다, 메인 페이지 이죠</h1>
      <CircleBtn onClick={moveRegister} />
    </div>
  );
}

export default Home;
