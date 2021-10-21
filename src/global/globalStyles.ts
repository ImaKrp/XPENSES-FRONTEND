import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  box-sizing: border-box;
}

*:focus {
  outline-style: none;
}

html {
  /* White */
  --white: #fafafa;
  --w100: #f6f6f6;
  --w200: #ececec;
  --w300: #e1e1e1;
  --w400: #d0d0d0;

  /* Dark */
  --black: #171717;
  --b100: #232323;
  --b200: #3c3c3c;
  --b300: #262227;
  --b400: #2e2b33;
  --b500: #5d5d5d;
  --b600: #2f2f2f;
  --b700: #3c3c3c; 

  /* Color */
  --purple: #9474ee;

  --red: #9e3145;

  font-size: 62.5%;

  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

input{
  font-family: 'Roboto', sans-serif;
}

.sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

::-webkit-scrollbar {
  width: 0;
}

h1, h2, h3, h4, h5, h6, span, p{
  cursor: default;
}
`;
