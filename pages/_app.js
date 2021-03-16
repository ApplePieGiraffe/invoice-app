import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Store from 'store'
import data from '../data/data.json'

import Layout from '../components/layout/Layout'
import { deleteInvoice } from '../utilities/Invoices'

export default function App({ Component, pageProps }) {
	const router = useRouter()
	const [invoices, setInvoices] = useState(null)

	useEffect(() => {
		if (Store.get('invoices') === undefined) {
			Store.set('invoices', data)
		}
		setInvoices(Store.get('invoices'))
	}, [setInvoices])

	function handleDelete(id) {
		router.push('/')
		deleteInvoice(id, invoices, setInvoices)
	}

	return (
		<>
			<Head>
				<link rel="icon" href="/images/favicon-32x32.png" type="image/icon"/>
			</Head>
			<Layout>
				<Component 
					{...pageProps} 
					invoices={invoices} 
					setInvoices={setInvoices} 
					handleDelete={handleDelete}
				/>
			</Layout>
		</>
	)
}