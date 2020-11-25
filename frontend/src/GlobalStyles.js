import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --primary-blue: #00BBE9;
    --primary-light: #F5F9FA;
    --primary-dark: #003D4D;
}

body {
    font-family: Roboto, sans-serif;
    font-size: 112.5%;
}
`