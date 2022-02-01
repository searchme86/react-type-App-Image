import { Outlet } from "react-router-dom";
import Logo from "../Components/Navbar/Logo/Logo";
import Navbar from "../Components/Navbar/Left/Navbar";
import FunctionsBtn from "../Components/Navbar/Right/FunctionsBtn";
import { Container, Header, HLeftSection, HRightSection } from "./layout.style";

function Layout() {
  return (
    <Container>
      <Header>
        <HLeftSection>
          <Logo />
          <Navbar />
        </HLeftSection>
        <HRightSection>
          <FunctionsBtn />
        </HRightSection>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Container>
  );
}

export default Layout;
