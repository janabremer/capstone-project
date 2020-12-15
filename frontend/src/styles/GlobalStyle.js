import { createGlobalStyle } from 'styled-components/macro'


export default createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --gap-extra-large: 60px;
    --gap-large: 40px;
    --gap-medium: 20px;
    --gap-small: 10px;
    --primary-blue: rgb(0, 187, 233);
    --primary-dark: rgb(0, 61, 77);
    --primary-light-transparent: rgba(245, 249, 250, 0.8);
    --primary-light: rgb(245, 249, 250);
    --secondary-dark: rgb(76, 94, 97);
    --shadow-dark: rgba(0, 61, 77, 0.25);
    --shadow-light: rgba(245, 249, 250, 0.25);
}

body {
    color: var(--primary-dark);
    font-family: 'Montserrat', sans-serif;
    font-size: 112.5%;
    height: 100vh;
    letter-spacing: .03em;
    max-width: 600px;
}
`