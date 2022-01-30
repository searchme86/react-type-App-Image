import { Link, useParams } from "react-router-dom";
import { getInvoiceNum } from "../../Core/Constant/Data";

function Invoice() {
  let { invoiceId } = useParams();
  let invoice = getInvoiceNum(parseInt(invoiceId as string));
  return (
    <main>
      <h2>Total Due : {invoice?.amount}</h2>
      <p>
        {invoice?.name} : {invoice?.number}
      </p>
      <p>Due Date:{invoice?.due}</p>
      <Link to="/">Home으로 이동</Link>
    </main>
  );
}

export default Invoice;
