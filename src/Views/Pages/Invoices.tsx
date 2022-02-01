import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../../Core/Constant/Data";

function Invoices() {
  const invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {invoices.map((item) => {
          return (
            <Link
              key={item.number}
              to={`/invoices/${item?.number}`}
              style={{ display: "display", margin: "1rem 0" }}
            >
              {item?.number}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
}

export default Invoices;
