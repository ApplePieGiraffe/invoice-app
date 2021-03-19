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
        background: ${props => props.theme.color.body.bg};
        font-family: 'Spartan', sans-serif;
        transition: background .3s;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
`

export default GlobalStyles