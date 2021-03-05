import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`

export default GlobalStyles