import { useState, useEffect } from 'react'
import Store from 'store'

import data from '../data/data.json'

import Layout from '../components/Layout'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

export default function App({ Component, pageProps }) {
	const [invoices, setInvoices] = useState(null)

	useEffect(() => {
		if (Store.get('invoices') === undefined) {
			Store.set('invoices', data)
		}
		setInvoices(Store.get('invoices'))
	}, [setInvoices])

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
		<Layout theme={theme}>
			<Sidebar toggleTheme={toggleTheme}/>
			<Main>
				<Component {...pageProps}/>
				{invoices ? <span>{invoices[0].id}</span> : <span>Loading...</span>}
			</Main>
		</Layout>
	)
}