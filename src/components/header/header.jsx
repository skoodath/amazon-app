import {
  Form,
  Header,
  Input,
  Logo,
  SearchIcon,
  SearchWrap,
  SearchWrapper,
  SignInwrap,
  SignInSpan,
  ShoppingCartIcon,
  ItemCount,
  CartWrap,
  CountWrap,
} from "../../styles/header/header.style";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <Logo
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="amazon logo"
          />
        </Link>
        <SearchWrap>
          <Form>
            <Input type="text" name="search" />
            <SearchWrapper>
              <SearchIcon />
            </SearchWrapper>
          </Form>
          <SignInwrap flexDirection>
            <SignInSpan fontSize={"12px"}>Hello, Sign in</SignInSpan>
            <SignInSpan fontSize={"14px"} fontWeight="true">
              Account &amp; Lists
            </SignInSpan>
          </SignInwrap>
          <SignInwrap flexDirection>
            <SignInSpan fontSize={"12px"}>Returns</SignInSpan>
            <SignInSpan fontSize={"14px"} fontWeight="true">
              &amp; Orders
            </SignInSpan>
          </SignInwrap>
          <Link to="/checkout">
            <CartWrap>
              <CountWrap>
                <ItemCount>0</ItemCount>
                <ShoppingCartIcon />
              </CountWrap>

              <SignInSpan fontSize={"14px"} fontWeight="true">
                Cart
              </SignInSpan>
            </CartWrap>
          </Link>
        </SearchWrap>
      </Header>
    </>
  );
};

export default HeaderComponent;
