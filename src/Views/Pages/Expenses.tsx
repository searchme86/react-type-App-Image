import { Link } from "react-router-dom";

function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <Link to="/">Home으로 이동</Link>
    </main>
  );
}

export default Expenses;
