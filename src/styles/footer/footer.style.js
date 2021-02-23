import styled from 'styled-components';

export const StyledWrapper = styled.footer`
    background-color: #232F3E;
`;

export const StyledFooterLink = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #37475A;
    height: 48px;
    color: #fff;
    font-size: 13px;
    margin-bottom: 40px;
`;

export const StyledFooterNav = styled.section`
    display: flex;
`;

export const StyledFooterNavContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto 40px;
    display: flex;
`;
export const StyledFooterNavSubContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    h3{
        color: #fff;
        font-size: 16px;
        margin: 6px 0 14px 0;
    }
    ul{
        display: flex;
        flex-direction: column;
    }
    li{
        list-style-type: none;
        margin: 0 0 10px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
    }
`;
export const StyledFooterBrandContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-top: 1px solid #3a4553;
    justify-content: center;
    align-items: center;
`;
export const StyledBrandLogo = styled.div`
    width: 100%;
    max-width: 1000px;
    div{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 0;
        margin: 0 auto;
        img{
        width: 100%;
        }
    }
    
`;
export const StyledFooterbarBottom = styled.div`
    background-color: #131A22;
    padding: 40px;
    height: 1px;
`;
