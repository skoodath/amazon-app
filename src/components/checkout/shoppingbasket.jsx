import {
  CartHeader,
  CartItemDesc,
  CartItemImage,
  CartItems,
  CartItemTitle,
  DeleteItembtn,
  MiscBtnContainer,
  Separator,
  ShoppingCart,
  StockStatus,
} from "../../styles/checkout/shoppingbasket.style";

const ShoppingBasketComponent = () => {
  return (
    <ShoppingCart>
      <CartHeader>
        <h1>Shopping Cart</h1>
        <a href="/cart">Deselect all items</a>
      </CartHeader>
      <CartItems>
        <CartItemImage>
          <img
            src="https://m.media-amazon.com/images/I/512CTlXBQKL._AC_AA360_.jpg"
            alt="item"
          />
        </CartItemImage>
        <CartItemDesc>
          <CartItemTitle>Morn Sun Circle Cutter</CartItemTitle>
          <StockStatus>In Stock</StockStatus>
          <MiscBtnContainer>
            <select>
              <option value="0">0 (Delete)</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10+</option>
            </select>
            <Separator />
            <DeleteItembtn>Delete</DeleteItembtn>
          </MiscBtnContainer>
        </CartItemDesc>
      </CartItems>
    </ShoppingCart>
  );
};

export default ShoppingBasketComponent;
