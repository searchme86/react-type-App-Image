import styled from "styled-components";

//공통
const HeaderCommon = styled.div`
  display: flex;
  position: absolute;
`;

export const Content = styled.div`
  position: relative;
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  width: 100%;
  box-shadow: 0px 2px 8px #f0f1f2;
`;

export const Header = styled.header`
  position: relative;
  height: 64px;
`;

export const HLeftSection = styled(HeaderCommon)`
  top: 16px;
  left: 40px;
`;

export const HRightSection = styled(HeaderCommon)`
  top: 16px;
  right: 40px;
`;
