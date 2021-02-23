import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
       font-family: Arial, Helvetica, sans-serif;
       background-color: #EAEDED;
       
    }
    
`;
export default GlobalStyle;