import styled from "styled-components";

export const Subheader = styled.nav`
  height: 39px;
  background-color: #232f3e;
  padding: 0 0 0 15px;
  display: flex;
  flex-flow: row nowrap;
`;
export const NavLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 62px;
  cursor: pointer;
`;
export const Hamburger = styled.span`
  background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png");
  background-position: -172px -255px;
  background-repeat: repeat-x;
  background-size: 350px;
  display: flex;
  align-items: center;
  position: static;
  width: 17px;
  height: 14px;
  line-height: 44px;
`;
export const MenuText = styled.span`
  padding: 0 0 0 5px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;
