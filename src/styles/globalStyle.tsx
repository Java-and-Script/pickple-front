import { Global, css } from '@emotion/react';

const style = css`
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 300;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansLight.woff2')
      format('woff2');
  }
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 500;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2')
      format('woff2');
  }
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 700;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff2')
      format('woff2');
  }
  #root {
    height: 100%;
    margin: 0 auto;
  }
  body {
    font-family: 'GmarketSans';
    margin: 0;
    height: 100dvh;
  }
  * {
    font-family: inherit;
    box-sizing: border-box;
  }
  @media (min-width: 501px) {
    html {
      scroll-behavior: smooth;
    }
  }
`;
const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
