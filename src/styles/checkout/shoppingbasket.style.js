import styled from "styled-components";

export const ShoppingCart = styled.section`
  background-color: #fff;
  margin: 0 20px 0 0;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  padding: 0 0 20px 0;
  h1 {
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
  }
  a {
    text-decoration: none;
    color: #007185;
    &:visited {
      color: #007185;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const CartItems = styled.section`
  display: flex;
  margin: 12px 0;
  border-bottom: 1px solid #ddd;
  padding: 0 0 12px 0;
`;
export const CartItemImage = styled.div`
  width: 220px;
  img {
    width: 80%;
  }
`;

export const CartItemDesc = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CartItemTitle = styled.h3``;
export const StockStatus = styled.span`
  font-size: 12px;
`;
export const MiscBtnContainer = styled.div`
  display: flex;
`;

export const Separator = styled.span`
  width: 1px;
  display: inline-block;
  margin: -2px 0.67375em 0;
  background-color: #ddd;
  line-height: 0;
  height: 14px;
  vertical-align: middle;
`;

export const DeleteItembtn = styled.button`
  border: none;
  color: #007185;
  background-color: transparent;
  outline: none;
  font-size: 12px;
`;
