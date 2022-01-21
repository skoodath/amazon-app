import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
`;
export const Categories = styled.nav`
  width: 365px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
  box-shadow: 4px 0 10px 0 rgba(0, 0, 0, 0.4);
  height: 100vh;
`;
export const CustomerProfile = styled.section`
  height: 50px;
  background-color: #232f3e;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
`;
export const CategoryList = styled.section`
  overflow: scroll;
  height: calc(100% - 50px);
`;
export const CloseButton = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  background-position: -190px -288px;
  background-size: 350px;
  left: 380px;
  top: 20px;
  cursor: pointer;
  background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png");
`;
