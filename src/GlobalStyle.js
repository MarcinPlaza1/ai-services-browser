import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, *::after, *::before {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'PretendardVariable', sans-serif;
    }

    a {
      text-decoration: none;
    }

    body::-webkit-scrollbar {
      width: 10px;
      background-color: #F5F5F5;
    }

    body::-webkit-scrollbar-thumb {
      background-color: rgba(211, 211, 211, 0.877);
      border-radius: 7px;
    }

    body::-webkit-scrollbar-thumb:hover {
      background-color: #555555;
    }
`;

export default GlobalStyle;
