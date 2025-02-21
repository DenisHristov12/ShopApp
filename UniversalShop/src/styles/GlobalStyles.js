import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    
   /* typography system */
   --text-s-1: 0.4rem;
    --text-s-2:   0.6rem;
    --text-s-3:   0.8rem;
    --text-md-1:   1.4rem;
    --text-md-2:   1.6rem;
    --text-md-3:   2rem;
    --text-lg-1:  2.4rem;
    --text-lg-2: 2.8rem;
    --text-lg-3:   3.2rem;
    --text-xl:   4rem;
    --text-xxl:  4.8rem;
    --text-xxxl:  6.2rem;


    /* spacing system */
    --space-xxs:  0.4rem;
    --space-xs:   0.8rem;
    --space-sm:   1.2rem;
    --space-md:   2rem;
    --space-lg:   3.2rem;
    --space-xl:   5.2rem;
    --space-xxl:  8.4rem;

    /* colors */

    --color-gray-50: #F9FAFB;
    --color-gray-100: #F3F4F6;
    --color-gray-200: #E5E7EB;
    --color-gray-300: #D1D5DB;
    --color-gray-400: #9CA3AF;
    --color-gray-500: #6B7280;
    --color-gray-600: #4B5563;
    --color-gray-700: #374151;
    --color-gray-800: #1F2937;
    --color-gray-900: #111827;
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', serif;
        font-weight: 500;
        color: var(--color-gray-800);
        min-height: 100vh;
        line-height: 1.5;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    select:disabled,
    input:disabled {
        background-color: var(--color-gray-500);
        outline-offset: -1px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }

    img {
        max-width: 100%;
    }
}
`;

export default GlobalStyles;
