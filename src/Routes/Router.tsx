import { Routes, Route } from "react-router-dom";
import Layout from "../Views/Layout/layout";
import Expenses from "../Views/Pages/Expenses";
import Invoices from "../Views/Pages/Invoices";
import NotFound from "../Views/Pages/NotFound";
import Invoice from "../Views/Pages/Invoice";
import Home from "../Views/Pages/Home";
import Register from "../Views/Pages/Register";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="expense" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId/*" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
