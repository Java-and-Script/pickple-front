import { Global, css } from '@emotion/react';

const style = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    height: 100dvh;
  }

  @media (min-width: 501px) {
    html {
      scroll-behavior: smooth;
    }
  }

  #root {
    font-family: 'GmarketSans';
    height: 100%;
    margin: 0 auto;
  }
`;
const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
