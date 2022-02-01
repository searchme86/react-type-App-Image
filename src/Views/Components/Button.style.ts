import styled from "styled-components";
import { Register } from "../Assets/Images/AssetsPath";

export const ButtonCommon = styled.button`
  display: block;
  text-align: center;
  cursor: pointer;
  outline: none;
`;

export const ButtonNormal = styled(ButtonCommon)`
  width: 55px;
  height: 24px;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  background: #597ef7;
`;

export const CircleBtn = styled(ButtonCommon)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: url(${Register.info.src});
`;
