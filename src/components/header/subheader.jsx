import {
  Hamburger,
  MenuText,
  NavLeft,
  Subheader,
} from "../../styles/header/subheader.style";

const SubHeaderComponent = () => {
  return (
    <Subheader>
      <NavLeft>
        <Hamburger />
        <MenuText>All</MenuText>
      </NavLeft>
    </Subheader>
  );
};

export default SubHeaderComponent;
