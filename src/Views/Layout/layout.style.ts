import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
  border: 1px solid red;
`;

const HeaderSection = styled.div`
  display: flex;
  position: absolute;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 64px;
  background: yellow;
`;

export const HLeftSection = styled(HeaderSection)`
  top: 16px;
  left: 40px;
`;

export const HRightSection = styled(HeaderSection)`
  top: 16px;
  right: 40px;
  border: 1px solid red;
`;
