import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Components/Navbar/Logo/Logo";
import Navbar from "../Components/Navbar/Left/Navbar";
import FunctionsBtn from "../Components/Navbar/Right/FunctionsBtn";
import SearchForm from "../Components/Navbar/Search/SearchForm";

function Layout() {
  return (
    <div className="container">
      <header>
        <Logo />
        <Navbar />
        <SearchForm />
        <FunctionsBtn />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
