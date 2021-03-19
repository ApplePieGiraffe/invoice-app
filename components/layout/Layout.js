import { useState, useEffect } from 'react'
import Store from 'store'
import styled, { ThemeProvider } from 'styled-components'
import { light, dark } from '../../data/Themes'

import GlobalStyles from './GlobalStyles'
import Sidebar from './Sidebar'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
    min-height: 100vh;

	@media only screen and (min-width: 900px) {
		flex-direction: row;
	}
`

export default function Layout({ children }) {
    const [theme, setTheme] = useState('light')

	useEffect(() => {
		if (Store.get('theme') === undefined) {
			Store.set('theme', 'light')
		}
		setTheme(Store.get('theme'))
	}, [setTheme])

    function toggleTheme() {
		Store.set('theme', theme === 'light' ? 'dark' : 'light')
        setTheme(Store.get('theme'))
    }

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <GlobalStyles/>
            <Wrapper>
                <Sidebar toggleTheme={toggleTheme}/>
                {children}
            </Wrapper>
        </ThemeProvider>
    )
}