import {
  CartMainContainer,
  CartWrapper,
} from "../../styles/checkout/checkout.style";
import SubTotal from "./subtotal";
import CartInfoComponent from "./cartinfo";
import ShoppingBasketComponent from "./shoppingbasket";

const CheckoutComponent = () => {
  return (
    <CartWrapper>
      <CartInfoComponent />
      <CartMainContainer>
        <ShoppingBasketComponent />
        <SubTotal />
      </CartMainContainer>
    </CartWrapper>
  );
};

export default CheckoutComponent;
