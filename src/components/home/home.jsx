import { Box, 
         CaptionBox, 
         CardWrapper, 
         FlexCardWrapper, 
         FluidCardFooter, 
         FluidCardHeader, 
         FluidContainer, 
         Home, 
         ImageBox, 
         Img, 
         Links, 
         Wrapper } from "../../styles/home/home.style"


const HomeComponent = () =>{
    return(
        <>
            <Wrapper>
                <Home>
                    <Img src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2021/AlexaDay/Hero/ALEXA_Anniversary_Desktop_1X_V2._CB659873694_.jpg" alt="Amazon Background" />
                </Home>
                <FlexCardWrapper>
                    <CardWrapper>
                        <FluidCardHeader>
                            <h1>Professional tools, testing &amp; more</h1>
                        </FluidCardHeader>
                        <FluidContainer>
                            
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Professional tools</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Jan_san1_186x116._SY116_CB406505878_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Measuring instruments</span>
                                </CaptionBox>
                            </Box>
                        </FluidContainer>
                        <FluidContainer>
                        <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Cleaning supplies</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Medical supplies</span>
                                </CaptionBox>
                            </Box>
                            
                        </FluidContainer>
                        <FluidCardFooter>
                            <Links href="">See more</Links>
                        </FluidCardFooter>
                    </CardWrapper>
                    <CardWrapper>
                    <FluidCardHeader>
                            <h1>Top picks for your home</h1>
                        </FluidCardHeader>
                        <FluidContainer>
                            
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>ACs</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_372x232_2._SY116_CB414480869_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Washing machines</span>
                                </CaptionBox>
                            </Box>
                        </FluidContainer>
                        <FluidContainer>
                        <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Televisions</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_3._SY116_CB414480869_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Refrigerators</span>
                                </CaptionBox>
                            </Box>
                            
                        </FluidContainer>
                        <FluidCardFooter>
                            <Links href="">See more</Links>
                        </FluidCardFooter>
                    </CardWrapper>
                    <CardWrapper>
                    <FluidCardHeader>
                            <h1>Chocolates, sweets &amp; more</h1>
                        </FluidCardHeader>
                        <FluidContainer>
                            
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg" alt="tool pic" />
                                </ImageBox>
    
                            </Box>
                            
                        </FluidContainer>
                        <FluidCardFooter>
                            <Links href="">See more</Links>
                        </FluidCardFooter>
                    </CardWrapper>
                    <CardWrapper>
                        <FluidCardHeader>
                            <h1>Amazon Pay| Secure your car &amp; bike</h1>
                        </FluidCardHeader>
                        <FluidContainer>
                            
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/Jan21/Desktop_QuadCard_secure-your-car._SY116_CB660819531_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Secure your car</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/Jan21/Desktop_QuadCard_Secure-your-bike._SY116_CB660819531_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Secure your bike</span>
                                </CaptionBox>
                            </Box>
                        </FluidContainer>
                        <FluidContainer>
                        <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/Jan21/Desktop_QuadCard_Set-reminders._SY116_CB660819531_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Set Reminders</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Acko/Jan21/Desktop_QuadCard_Vehicle-accessories._SY116_CB660819531_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Vehicle accessories</span>
                                </CaptionBox>
                            </Box>
                            
                        </FluidContainer>
                        <FluidCardFooter>
                            <Links href="">See more</Links>
                        </FluidCardFooter>
                    </CardWrapper>
                    <CardWrapper>
                    <FluidCardHeader>
                            <h1>Style for Mens | Up to 70% off</h1>
                        </FluidCardHeader>
                        <FluidContainer>
                            
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/1._SY116_CB413570652_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Clothing</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/2._SY116_CB413570652_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Footwear</span>
                                </CaptionBox>
                            </Box>
                        </FluidContainer>
                        <FluidContainer>
                        <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/3._SY116_CB413570652_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Watches</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/5._SY116_CB413570652_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Bags &amp; luggages</span>
                                </CaptionBox>
                            </Box>
                            
                        </FluidContainer>
                        <FluidCardFooter>
                            <Links href="">See more</Links>
                        </FluidCardFooter>
                    </CardWrapper>
                    <CardWrapper>
                    <FluidCardHeader>
                            <h1>Style for Women | Up to 70% off</h1>
                        </FluidCardHeader>
                        <FluidContainer>
                            
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Women's clothing</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/2._SY116_CB413571277_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Footwear + Handbags</span>
                                </CaptionBox>
                            </Box>
                        </FluidContainer>
                        <FluidContainer>
                        <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/5._SY116_CB413571277_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Watches</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/3._SY116_CB413571277_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Fashion jewellery</span>
                                </CaptionBox>
                            </Box>
                            
                        </FluidContainer>
                        <FluidCardFooter>
                            <Links href="">See more</Links>
                        </FluidCardFooter>
                    </CardWrapper>
                    <CardWrapper>
                    <FluidCardHeader>
                            <h1>Everyday essentials</h1>
                        </FluidCardHeader>
                        <FluidContainer>
                            
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Cleaning essentials</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_1._SY116_CB431329533_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Immunity &amp; healthcare</span>
                                </CaptionBox>
                            </Box>
                        </FluidContainer>
                        <FluidContainer>
                        <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Women's personal care</span>
                                </CaptionBox>
                            </Box>
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_3._SY116_CB431329535_.jpg" alt="tool pic" />
                                </ImageBox>
                                <CaptionBox>
                                    <span>Men's grooming</span>
                                </CaptionBox>
                            </Box>
                            
                        </FluidContainer>
                        <FluidCardFooter>
                            <Links href="">See more</Links>
                        </FluidCardFooter>
                    </CardWrapper>
                    <CardWrapper>
                    <FluidCardHeader>
                            <h1>For a productive home office</h1>
                        </FluidCardHeader>
                        <FluidContainer>
                            
                            <Box>
                                <ImageBox>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Dashboard/WFH2_GW_DC_379x304._SY304_CB661185471_.jpg" alt="tool pic" />
                                </ImageBox>
                            </Box>
                        </FluidContainer>
                        <FluidCardFooter>
                            <Links href="">See more</Links>
                        </FluidCardFooter>
                    </CardWrapper>
                    
                </FlexCardWrapper>
            </Wrapper>
            
        </>
    )
}

export default HomeComponent;