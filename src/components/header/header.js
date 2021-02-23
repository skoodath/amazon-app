import { StyledForm, 
         StyledHeader, 
         StyledInput, 
         StyledLogo, 
         StyledSearchIcon, 
         StyledSearchWrap, 
         StyledSearchWrapper,
         StyledSignInwrap, 
         StyledSignInSpan,
         ShoppingCartIcon,
         StyledItemCount,
         StyledCartWrap,
         StyledCountWrap} from "../../styles/header/header.style"
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <>
            <StyledHeader>
                <Link to="/">
                    <StyledLogo src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo" />
                </Link>
                <StyledSearchWrap>
                    <StyledForm>
                        <StyledInput type="text" name="search" />
                        <StyledSearchWrapper>
                            <StyledSearchIcon />
                        </StyledSearchWrapper>
                    </StyledForm>
                    <StyledSignInwrap flexDirection>
                        <StyledSignInSpan fontSize={'12px'}>Hello, Sign in</StyledSignInSpan>
                        <StyledSignInSpan fontSize={'14px'} fontWeight='true'>Account &amp; Lists</StyledSignInSpan>
                    </StyledSignInwrap>
                    <StyledSignInwrap flexDirection>
                        <StyledSignInSpan fontSize={'12px'}>Returns</StyledSignInSpan>
                        <StyledSignInSpan fontSize={'14px'} fontWeight='true'>&amp; Orders</StyledSignInSpan>
                    </StyledSignInwrap>
                    <Link to="/checkout">
                    <StyledCartWrap>
                        <StyledCountWrap>
                            <StyledItemCount>0</StyledItemCount>
                            <ShoppingCartIcon />
                        </StyledCountWrap>
                        
                            <StyledSignInSpan fontSize={'14px'} fontWeight='true'>Cart</StyledSignInSpan>
                    </StyledCartWrap>
                    </Link>
            </StyledSearchWrap>
            </StyledHeader>
            
        </>
    )
}

export default Header;