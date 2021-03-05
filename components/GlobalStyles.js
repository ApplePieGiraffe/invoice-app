import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${props => props.theme.color.bg.main};
        font-family: 'Spartan', sans-serif;
        transition: background .3s;
    }
`

export default GlobalStyles