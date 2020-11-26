import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

:root {
    --primary-blue: #00BBE9;
    --primary-light: #F5F9FA;
    --primary-dark: #003D4D;

    --gap-medium: 20px;
    --gap-large: 40px;
}

body {
    font-family: Roboto, sans-serif;
    font-size: 112.5%;
    max-width: 600px;
    color: var(--primary-dark);
    background-color: var(--primary-light;
    height: 100vh;
}
`