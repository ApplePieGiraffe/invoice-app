// imports

import { createGlobalStyle, ThemeProvider } from 'styled-components'

// global styles

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
`

// themes

const lightTheme = {
	colors: {
		primary: '#f8f8fb'
	}
}

const darkTheme = {
	colors: {
		primary: '#141625'
	}
}

// component

function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles/>
			<ThemeProvider theme={lightTheme}>
				<Component {...pageProps}/>
			</ThemeProvider>
		</>
	)
}

export default App