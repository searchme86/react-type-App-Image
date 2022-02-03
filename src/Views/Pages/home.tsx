import { useNavigate } from "react-router-dom";
import {
  CircleBtn,
  MainCategoryBtn,
  MainSearchBtn,
} from "../Components/Button.style";
import { MainInputWrapper, SearchInput } from "../Components/Input.style";
import { HomeContent } from "../Layout/layout.style";
import { Category, CategoryLi, CategoryList, SearchBar } from "./Home.style";

function Home() {
  let navigate = useNavigate();
  const moveRegister = (): void => {
    navigate("/register");
  };

  return (
    <>
      <HomeContent>
        <SearchBar>
          <MainInputWrapper>
            <SearchInput />
          </MainInputWrapper>
          <MainSearchBtn>Search</MainSearchBtn>
        </SearchBar>
        <Category>
          <CategoryList>
            <CategoryLi>
              <MainCategoryBtn>LOFI</MainCategoryBtn>
            </CategoryLi>
            <CategoryLi>
              <MainCategoryBtn>Pop</MainCategoryBtn>
            </CategoryLi>
            <CategoryLi>
              <MainCategoryBtn>K-POP</MainCategoryBtn>
            </CategoryLi>
            <CategoryLi>
              <MainCategoryBtn>영화음악</MainCategoryBtn>
            </CategoryLi>
            <CategoryLi>
              <MainCategoryBtn>재즈</MainCategoryBtn>
            </CategoryLi>
            <CategoryLi>
              <MainCategoryBtn>기타</MainCategoryBtn>
            </CategoryLi>
          </CategoryList>
        </Category>
        <div className="">
          <div></div>
        </div>
      </HomeContent>
      <CircleBtn onClick={moveRegister} />
    </>
  );
}

export default Home;
