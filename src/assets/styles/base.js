import { createGlobalStyle } from 'styled-components';

export const GlobalBase = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
                box-sizing: border-box
    }

    html{
        -webkit-user-select: none; /* Safari 3.1+ */
        -webkit-touch-callout: none; /* iOS Safari */
        user-select: none; /* Standard syntax */
    }

    h1, h2, h3, h4, h5, h6, hr, p, blockquote,dl, dt, dd, ul, ol, li,pre,fieldset,legend, button, input, textarea, th, td {
        margin: 0;
        padding: 0;
    };

    body {
        font-family: 'gilroy-regular';
        min-height: 100vh;
        margin: 0;
        padding: 0;
         /* Status bar height on iOS 11.0 */
        padding-top: constant(safe-area-inset-top);
        /* Status bar height on iOS 11+ */
        padding-top: env(safe-area-inset-top)
    }

    #app{
        position: relative;
    }

    ul, ol { 
        list-style: none; 
    }
    a {
        text-decoration: none; 
        -webkit-tap-highlight-color: transparent;
    }
    input{
        -webkit-appearance: none;
        border: 0;
        outline: 0;
        background: transparent;
        color: inherit;
    }
    ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.4;
    }

    ::placeholder {
        color: inherit;
        opacity: 0.4;
    }
`;
