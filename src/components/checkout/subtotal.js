import { StyledCheckoutContainer, StyledCheckoutItem } from "../../styles/checkout/subtotal.style"



const SubTotal = () => {
    return(
        <StyledCheckoutContainer>
            <StyledCheckoutItem>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="purchase protection" />
            </StyledCheckoutItem>
            <StyledCheckoutItem padding='true'>
                <p>Subtotal (3 items): Rs.1,722.00</p>
                <span>Proceed to Buy</span>
            </StyledCheckoutItem>
        </StyledCheckoutContainer>
    )
}

export default SubTotal;