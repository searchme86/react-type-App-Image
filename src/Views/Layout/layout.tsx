import { Outlet } from "react-router-dom";
import Logo from "../Components/Navbar/Logo/Logo";
import Navbar from "../Components/Navbar/Left/Navbar";
import FunctionsBtn from "../Components/Navbar/Right/FunctionsBtn";
import {
  Content,
  Header,
  HeaderSection,
  HLeftSection,
  HRightSection,
} from "./layout.style";

function Layout() {
  return (
    <>
      <HeaderSection>
        <Header>
          <Content>
            <HLeftSection>
              <Logo />
              <Navbar />
            </HLeftSection>
            <HRightSection>
              <FunctionsBtn />
            </HRightSection>
          </Content>
        </Header>
      </HeaderSection>
      <main>
        <Content>
          <Outlet />
        </Content>
      </main>
    </>
  );
}

export default Layout;
