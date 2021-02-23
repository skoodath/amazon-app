import { StyledCartHeader, StyledCartItemDesc, StyledCartItemImage, StyledCartItems, StyledCartItemTitle, StyledDeleteItembtn, StyledMiscBtnContainer, StyledSeparator, StyledShoppingCart, StyledStockStatus } from "../../styles/checkout/shoppingbasket.style";



const ShoppingBasket = () =>{
    return(
        <StyledShoppingCart>
                    <StyledCartHeader>
                        <h1>Shopping Cart</h1>
                        <a href="/cart">Deselect all items</a>
                    </StyledCartHeader>
                    <StyledCartItems>
                    <StyledCartItemImage>
                        <img src="https://m.media-amazon.com/images/I/512CTlXBQKL._AC_AA360_.jpg" alt="item" />
                    </StyledCartItemImage>
                    <StyledCartItemDesc>
                        <StyledCartItemTitle>
                            Morn Sun Circle Cutter
                        </StyledCartItemTitle>
                        <StyledStockStatus>
                            In Stock
                        </StyledStockStatus>
                        <StyledMiscBtnContainer>
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
                            <StyledSeparator />
                            <StyledDeleteItembtn>Delete</StyledDeleteItembtn>
                        </StyledMiscBtnContainer>
                    </StyledCartItemDesc>
                    
                    </StyledCartItems>
                </StyledShoppingCart>
    )
}

export default ShoppingBasket;