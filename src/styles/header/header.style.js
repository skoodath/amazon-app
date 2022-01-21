import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const Header = styled.header`
  height: 60px;
  display: flex;
  background-color: #0f1111;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 12px 20px auto;
  cursor: pointer;
`;

export const SearchWrap = styled.div`
  height: 60px;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem 0;
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 5px;
`;
export const Input = styled.input`
  border-radius: 5px 0 0 5px;
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  display: block;
  padding: 5px;
  font-size: 16px;
  font-weight: normal;
`;

export const SearchWrapper = styled.div`
  display: flex;
  background-color: #febd69;
  width: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
`;
export const SearchIcon = styled(MdSearch)`
  font-size: 32px;
`;
export const SignInwrap = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? "column" : "row")};
  margin: 0 2rem;
`;
export const SignInSpan = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => (fontWeight ? "bold" : "normal")};
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CartWrap = styled.div`
  display: flex;
  margin: 0 1rem;
  height: 50px;
  padding: 0 9px 11px 10px;
  justify-content: center;
`;

export const CountWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 1px;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: nowrap;
`;

export const ShoppingCartIcon = styled.span`
  background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png");
  background-position: -10px -340px;
  background-repeat: repeat-x;
  background-size: 350px;
  display: flex;
  align-items: center;
  position: static;
  width: 38px;
  height: 26px;
  left: 10px;
  top: 11px;
  line-height: 44px;
`;

export const ItemCount = styled.span`
  display: flex;
  position: absolute;
  left: 13px;
  right: auto;
  top: 8px;
  color: #f08804;
  font-size: 16px;
  width: 19px;
  line-height: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;
