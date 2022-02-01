import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      <h1>제목을 입력하세요</h1>
      <div>
        <input style={{ display: "inline-block" }} />
        <button style={{ display: "inline-block" }}>입력</button>
      </div>
      <Link to="/">홈으로</Link>
    </div>
  );
}

export default Register;
