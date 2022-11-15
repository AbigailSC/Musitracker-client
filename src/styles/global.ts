import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    margin:0 auto;
    scroll-behavior: smooth;

    /* Animations */

    --sc-animation-duration: 0.2s;
    --sc-animation-timing: ease;

    /* Sizes */

    --sc-spacing-1: 0;
    --sc-spacing-2: 4;
    --sc-spacing-3: 8;
    --sc-spacing-4: 16;
    --sc-spacing-5: 32;
    --sc-spacing-6: 64;
    --sc-spacing-7: 128;
    --sc-spacing-8: 256;
    --sc-spacing-tiny: 1/4;
    --sc-spacing-small: 1/3;
    --sc-spacing-medium: 1/2;

    /* Weight */

    --sc-font-weight-sm: 300;
    --sc-font-weight-medium: 500;
    --sc-font-weight-large: 700;
    --sc-font-weight-xl: 900;

    /* Breackpoints */

    --sc-breakpoints-mobile: 400px;
    --sc-breakpoints-tablet: 768px;
    --sc-breakpoints-computer: 992px;
    --sc-breakpoints-desktop: 1200px;
    --sc-breakpoints-widescreen: 1920px;

    /* Colors */

    --sc-background: #111827;
    --sc-background-hover:#1f2937;
    --sc-background-focus:#4b5563;
    --sc-text-color: #fff;
    --sc-text-color-hover:#b9bdc3;
    --sc-primary-color: #A4133C;
    --sc-primary-color-hover: #800F2F;
    --sc-primary-color-focus: #590D22;
    --sc-primary-color-light: #C9184A;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 1px solid red; */
    font-family: 'Ubuntu', sans-serif;
    background-color: var(--sc-background);
    color: var(--sc-text-color);
  }
  *{
    margin: 0;
    font-weight: var(--sc-font-weight-sm);
    list-style: none;
    outline: none;
    border: none;
    font-size: 1em;
    box-sizing: border-box;
  }
`;
