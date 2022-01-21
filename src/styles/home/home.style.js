import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1560px;
  margin: 0 auto;
  position: relative;
`;

export const Home = styled.section`
  position: absolute;
  top: -300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  //height: 300px;
  z-index: 0;
`;
export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  margin: 0;
  object-fit: cover;
  z-index: -1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
export const FlexCardWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin: 300px 0 0 0;
  padding: 0 10px;
`;
export const CardWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  flex: 1 0 290px;
  max-width: 380px;
  height: 420px;
  margin: 10px;
  padding: 10px;
`;

export const FluidContainer = styled.div`
  display: flex;
`;
export const FluidCardHeader = styled.div`
  padding: 1rem;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;
export const ImageBox = styled.div`
  img {
    width: 100%;
  }
`;
export const CaptionBox = styled.div`
  span {
    font-size: 12px;
    color: #0f1111;
  }
`;

export const FluidCardFooter = styled.div`
  position: absolute;
  padding: 0 20px;
  margin: 0 0 20px 0;
  bottom: 0;
  width: 100%;
`;

export const Links = styled.a`
  color: #007185;
  font-size: 13px;
  &:visited {
    color: #007185;
  }
`;
