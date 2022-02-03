import { useNavigate } from "react-router-dom";
import {
  CircleBtn,
  MainCategoryBtn,
  MainSearchBtn,
} from "../Components/Button.style";
import { MainInputWrapper, SearchInput } from "../Components/Input.style";
import {
  Category,
  CategoryLi,
  CategoryList,
  Item,
  ItemLi,
  ItemList,
  ItemWrapper,
  SearchBar,
} from "./Home.style";

import faker from "@faker-js/faker";
import { Img, ImgWrapper } from "../Components/PIcture.style";

function Home() {
  let navigate = useNavigate();
  const moveRegister = (): void => {
    navigate("/register");
  };

  return (
    <>
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
      <ItemWrapper>
        <ItemList>
          <ItemLi>
            <Item>
              <ImgWrapper>
                <Img src={faker.image.food()} />
              </ImgWrapper>
            </Item>
          </ItemLi>
          <ItemLi>
            <Item>
              <ImgWrapper>
                <Img src={faker.image.nature()} />
              </ImgWrapper>
            </Item>
          </ItemLi>
          <ItemLi>
            <Item>
              <ImgWrapper>
                <Img src={faker.image.animals()} />
              </ImgWrapper>
            </Item>
          </ItemLi>
          <ItemLi>
            <Item>
              <ImgWrapper>
                <Img src={faker.image.city()} />
              </ImgWrapper>
            </Item>
          </ItemLi>
          <ItemLi>
            <Item>
              <ImgWrapper>
                <Img src={faker.image.cats()} />
              </ImgWrapper>
            </Item>
          </ItemLi>
          <ItemLi>
            <Item>
              <ImgWrapper>
                <Img src={faker.image.technics()} />
              </ImgWrapper>
            </Item>
          </ItemLi>
          <ItemLi>
            <Item>
              <ImgWrapper>
                <Img src={faker.image.transport()} />
              </ImgWrapper>
            </Item>
          </ItemLi>
          <ItemLi>
            <Item>
              <ImgWrapper>
                <Img src={faker.image.abstract()} />
              </ImgWrapper>
            </Item>
          </ItemLi>
        </ItemList>
      </ItemWrapper>

      {/* <div className="">
        <div>{faker.name.firstName()}</div>
        <div>{faker.name.firstName()}</div>
        <div>{faker.name.firstName()}</div>
        <div>{faker.name.firstName()}</div>
      </div> */}

      <CircleBtn onClick={moveRegister} />
    </>
  );
}

export default Home;
