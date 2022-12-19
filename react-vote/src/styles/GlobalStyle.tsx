import { createGlobalStyle } from 'styled-components';
import './font.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;

    font-family: Pretendard;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    /* line-height: 0; */
  }
`;
export default GlobalStyle;
