import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expense">Expenses</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
