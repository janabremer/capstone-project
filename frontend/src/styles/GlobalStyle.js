import { createGlobalStyle } from 'styled-components/macro'


export default createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --gap-large: 40px;
    --gap-medium: 20px;
    --primary-blue: rgb(0, 187, 233);
    --primary-dark: rgb(0, 61, 77);
    --secondary-dark: rgb(89, 111, 114);
    --primary-light: rgb(245, 249, 250);
    --primary-light-transparent: rgba(245, 249, 250, 0.7);
    --shadow-dark: rgba(0, 61, 77, 0.25);
    --shadow-light: rgba(245, 249, 250, 0.25);
}

body {
    color: var(--primary-dark);
    font-family: Roboto, sans-serif;
    font-size: 112.5%;
    height: 100vh;
    max-width: 600px;
}
`