import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: #232f3e;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #37475a;
  height: 48px;
  color: #fff;
  font-size: 13px;
  margin-bottom: 40px;
`;

export const FooterNav = styled.section`
  display: flex;
`;

export const FooterNavContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 40px;
  display: flex;
`;
export const FooterNavSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    color: #fff;
    font-size: 16px;
    margin: 6px 0 14px 0;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    list-style-type: none;
    margin: 0 0 10px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
`;
export const FooterBrandContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-top: 1px solid #3a4553;
  justify-content: center;
  align-items: center;
`;
export const BrandLogo = styled.div`
  width: 100%;
  max-width: 1000px;
  div {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
`;
export const FooterbarBottom = styled.div`
  background-color: #131a22;
  padding: 40px;
  height: 1px;
`;
