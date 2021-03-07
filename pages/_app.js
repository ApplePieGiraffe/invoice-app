import { useState, useEffect } from 'react'
import Store from 'store'
import data from '../data/data.json'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
	const [invoices, setInvoices] = useState(null)

	useEffect(() => {
		if (Store.get('invoices') === undefined) {
			Store.set('invoices', data)
		}
		setInvoices(Store.get('invoices'))
	}, [setInvoices])

	return (
		<Layout>
			<Component {...pageProps} invoices={invoices}/>
		</Layout>
	)
}