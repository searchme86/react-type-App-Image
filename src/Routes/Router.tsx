// import Expenses from "../Views/Pages/Expenses";
// import Invoices from "../Views/Pages/Invoices";
// import Invoice from "../Views/Pages/Invoice";
import { Routes, Route } from "react-router-dom";
import Layout from "../Views/Layout/layout";
import NotFound from "../Views/Pages/NotFound";
import Home from "../Views/Pages/Home";
import Register from "../Views/Pages/Register";
import Detail from "../Views/Pages/Detail";
import Completed from "../Views/Pages/Competed";
import Modify from "../Views/Pages/Modify";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="detail">
          <Route path=":itemIdx" element={<Detail />} />
        </Route>
        <Route path="modify" element={<Modify />} />
        <Route path="completed" element={<Completed />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="expense" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId/*" element={<Invoice />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default Router;
