import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  width: 756px;
  margin: 34px auto 27px auto;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;

export const Category = styled.div`
  width: 608px;
  margin: 0 auto;
`;

export const CategoryList = styled.ul`
  display: flex;
  width: 100%;
`;

export const CategoryLi = styled.li`
  margin: 0 16px 0 0;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
