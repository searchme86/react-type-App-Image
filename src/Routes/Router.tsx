import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Expenses from "../Views/Pages/Expenses";
import Invoices from "../Views/Pages/Invoices";
import NotFound from "../Views/Pages/NotFound";
import Invoice from "../Views/Pages/Invoice";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expense" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
