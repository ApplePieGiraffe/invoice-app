import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import { light, dark } from '../data/Themes'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
`

export default function Layout({ theme, children }) {
    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <GlobalStyles/>
            <Wrapper>
                {children}
            </Wrapper>
        </ThemeProvider>
    )
}