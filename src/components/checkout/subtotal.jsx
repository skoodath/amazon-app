import {
  CheckoutContainer,
  CheckoutItem,
} from "../../styles/checkout/subtotal.style";

const SubTotal = () => {
  return (
    <CheckoutContainer>
      <CheckoutItem>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt="purchase protection"
        />
      </CheckoutItem>
      <CheckoutItem padding="true">
        <p>Subtotal (3 items): Rs.1,722.00</p>
        <label htmlFor="giftcheck">
          <input type="checkbox" name="giftcheck" />
          <span>This order contains a gift</span>
        </label>
        <button>Proceed to Buy</button>
      </CheckoutItem>
    </CheckoutContainer>
  );
};

export default SubTotal;
