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
      <div>
        <input style={{ display: "inline-block" }} />
        <button style={{ display: "inline-block" }}>Search</button>
      </div>
      <button>LOFI</button>
      <button>POP</button>
      <button>K-POP</button>
      <button>영화음악</button>
      <button>재즈</button>
      <button>기타</button>
      <CircleBtn onClick={moveRegister} />
    </div>
  );
}

export default Home;
