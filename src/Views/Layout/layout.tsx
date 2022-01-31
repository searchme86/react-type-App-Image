import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Components/Navbar/Logo/Logo";
import Navbar from "../Components/Navbar/Left/Navbar";
import FunctionsBtn from "../Components/Navbar/Right/FunctionsBtn";
import SearchForm from "../Components/Navbar/Search/SearchForm";
import { Header } from "./Layout.style";

function Layout() {
  return (
    <div className="container">
      <Header>
        <Logo />
        <Navbar />
        <SearchForm />
        <FunctionsBtn />
      </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
