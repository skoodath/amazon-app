import { StyledCartMainContainer, 
         StyledCartWrapper
          } from "../../styles/checkout/checkout.style"
import CurrencyFormat from 'react-currency-format';
import ShoppingBasket from "./shoppingbasket";
import SubTotal from "./subtotal";
import CartInfo from "./cartinfo";

const Checkout = () =>{
    return(
        <StyledCartWrapper>
            <CartInfo />
            <StyledCartMainContainer>
                <ShoppingBasket />
                <SubTotal />
            </StyledCartMainContainer>
        </StyledCartWrapper>
    )
}

export default Checkout;