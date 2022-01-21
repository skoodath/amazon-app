import {
  Categories,
  CategoryList,
  CloseButton,
  CustomerProfile,
  MenuContainer,
} from "../../styles/home/menu.style";

const CategoryComponent = () => {
  return (
    <MenuContainer>
      <Categories>
        <CustomerProfile>Hello, Shiju</CustomerProfile>
        <CategoryList>Hi</CategoryList>
        <CloseButton />
      </Categories>
    </MenuContainer>
  );
};

export default CategoryComponent;
