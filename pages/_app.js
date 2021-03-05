import { useState } from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

	return (
		<Layout theme={theme}>
			<Sidebar toggleTheme={toggleTheme}/>
			<Main>
				<Component {...pageProps}/>
			</Main>
		</Layout>
	)
}