import { createGlobalStyle } from 'styled-components';import { COLORS } from '../../theme';export const GlobalStyles = createGlobalStyle`  *,  *::before,  *::after {    box-sizing: border-box;    font-size: 16px;    margin: 0;    padding: 0;  }  ul[class],  ol[class] {    padding: 0;  }  body,  h1,  h2,  h3,  h4,  p,  li,  figure,  figcaption,  blockquote,  dl,  dd {    margin: 0;    padding: 0;  }  body {  width: 100%;    height: 100dvh;    text-rendering: optimizeSpeed;    line-height: 1.5;    background-color: ${COLORS.white};        scroll-behavior: smooth;    position: fixed;    overflow: auto;  }   a:not([class]) {    text-decoration-skip-ink: auto;  }  img {    max-width: 100%;    display: block;  }  article > * + * {    margin-top: 1em;  }  input,  button,  textarea,  select {    font: inherit;  }  `;