import { StyledBrandLogo, 
         StyledFooterbarBottom, 
         StyledFooterBrandContainer, 
         StyledFooterLink, 
         StyledFooterNav, 
         StyledFooterNavContainer, 
         StyledFooterNavSubContainer, 
         StyledWrapper } from "../../styles/footer/footer.style";


const Footer = () => {
    return(
        <StyledWrapper>
            <StyledFooterLink href="/">Back to top</StyledFooterLink>
            <StyledFooterNav>
                <StyledFooterNavContainer>
                    <StyledFooterNavSubContainer>
                        <h3>Get to Know Us</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press Releases</li>
                            <li>Amazon Cares</li>
                            <li>Gift a Smile</li>
                        </ul>
                    </StyledFooterNavSubContainer>
                    <StyledFooterNavSubContainer>
                        <h3>Connect with Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </StyledFooterNavSubContainer>
                    <StyledFooterNavSubContainer>
                        <h3>Make Money with Us</h3>
                        <ul>
                            <li>Sell on Amazon</li>
                            <li>Sell under Amazon Accelerator</li>
                            <li>Become an Affiliate</li>
                            <li>fulfilment by amazon</li>
                            <li>Advertise Your Products</li>
                            <li>Amazon Pay on Merchants</li>
                        </ul>
                    </StyledFooterNavSubContainer>
                    <StyledFooterNavSubContainer>
                        <h3>Let Us Help You</h3>
                        <ul>
                            <li>COVID-19 and Amazon</li>
                            <li>Your Account</li>
                            <li>Returns Centre</li>
                            <li>100% Purchase Protection</li>
                            <li>Amazon App Download</li>
                            <li>Amazon Assistant Download</li>
                            <li>Help</li>
                        </ul>
                    </StyledFooterNavSubContainer>
                </StyledFooterNavContainer>
            </StyledFooterNav>
            <StyledFooterBrandContainer>
                <StyledBrandLogo>
                    <div>
                        <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon logo" />
                    </div>
                    
                </StyledBrandLogo>
            </StyledFooterBrandContainer>
            <StyledFooterbarBottom></StyledFooterbarBottom>
        </StyledWrapper>
    )
}

export default Footer;