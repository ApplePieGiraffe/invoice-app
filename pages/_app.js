import Head from 'next/head'
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
		<>
			<Head>
				<link rel="icon" href="/images/favicon-32x32.png" type="image/icon"/>
			</Head>
			<Layout>
				<Component {...pageProps} invoices={invoices}/>
			</Layout>
		</>
	)
}