import styled from 'styled-components';

export const StyledCheckoutContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 20%;
    max-width: 300px;
`;
export const StyledCheckoutItem = styled.div`
    background-color: #fff;
    margin: 0 0 20px 0;
    padding: ${({padding}) => padding? '20px 15px': 0 };
    span{
        background-image: linear-gradient(to bottom,#f7dfa5,#f0c14b);
        box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
        height: 29px;
        border-radius: 2px;
        border-color: #a88734 #9c7e31 #846a29;;
        border: 1px solid;
        padding: 6px 12px;
        width: 100%;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        margin: 16px 0 0 0;
        cursor: pointer;
    }
`;