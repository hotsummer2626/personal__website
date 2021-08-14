import { createGlobalStyle, css } from "styled-components";
import { mediaQueries } from "../../mediaQueries";

const GlobalStyles = createGlobalStyle`
:root {
  --header-height: 3rem;

  /*========== Colors ==========*/
  /* Change favorite color */
  --hue-color: 250; /*Purple 250 - Green 142 - Blue 230 - Pink 340*/

  /* HSL color mode */
  --first-color: hsl(var(--hue-color), 69%, 61%);
  --first-color-alt: hsl(var(--hue-color), 57%, 53%);
  --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
  --text-color-light: hsl(var(--hue-color), 8%, 65%);
  ${({ isDarkTheme }) =>
    isDarkTheme
      ? css`
          --first-color-second: hsl(var(--hue-color), 30%, 8%);
          --title-color: hsl(var(--hue-color), 8%, 95%);
          --text-color: hsl(var(--hue-color), 8%, 75%);
          --input-color: hsl(var(--hue-color), 29%, 16%);
          --body-color: hsl(var(--hue-color), 28%, 12%);
          --container-color: hsl(var(--hue-color), 29%, 16%);
          --scroll-bar-color: hsl(var(--hue-color), 12%, 48%);
          --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);
        `
      : css`
          --first-color-second: hsl(var(--hue-color), 69%, 61%);
          --title-color: hsl(var(--hue-color), 8%, 15%);
          --text-color: hsl(var(--hue-color), 8%, 45%);
          --input-color: hsl(var(--hue-color), 70%, 96%);
          --body-color: hsl(var(--hue-color), 60%, 99%);
          --container-color: #fff;
          --scroll-bar-color: hsl(var(--hue-color), 12%, 90%);
          --scroll-thumb-color: hsl(var(--hue-color), 12%, 80%);
        `}
  
  
  /*========== Font and typography ==========*/
  --body-font: "Poppins", sans-serif;

  /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
  --big-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.813rem;
  --smaller-font-size: 0.75rem;

  ${mediaQueries("lg")`
    --big-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  `}

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes Bottom ==========*/
  /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
  --mb-0-25: 0.25rem;
  --mb-0-5: 0.5rem;
  --mb-0-75: 0.75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0 0 var(--header-height) 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);

  ${mediaQueries("md")`
    margin: 0;
  `}
}



h1,
h2,
h3,
h4 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

::-webkit-scrollbar{
  width: .60rem;
  background-color: var(--scroll-bar-color);
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb{
  background-color: var(--scroll-thumb-color);
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover{
  background-color: var(--text-color-light);
}

`;

export default GlobalStyles;
