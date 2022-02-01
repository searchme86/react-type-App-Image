import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Components/Navbar/Logo/Logo";
import Navbar from "../Components/Navbar/Left/Navbar";
import FunctionsBtn from "../Components/Navbar/Right/FunctionsBtn";
import SearchForm from "../Components/Navbar/Search/SearchForm";
import { Container, Header } from "./layout.style";

function Layout() {
  return (
    <Container>
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
    </Container>
  );
}

export default Layout;
