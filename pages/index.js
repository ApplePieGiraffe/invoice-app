import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import NoInvoices from '../components/NoInvoices'
import InvoicesList from '../components/InvoicesList'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 45.625rem;
	height: 100%;
	margin: 0 auto;
`

export default function Home({ invoices }) {
	const [filter, setFilter] = useState(null)
	const [filteredInvoices, setFilteredInvoices] = useState(null)
	
	useEffect(() => {
		setFilteredInvoices(invoices)

		if (invoices && filter) {
			setFilteredInvoices(invoices.filter((invoice) => {
				return invoice.status === filter
			}))
		}

		console.log('rendered')
	}, [invoices, filter])

	return (
		<Wrapper>
			<Header invoices={invoices} setFilter={setFilter}/>
			{invoices && invoices.length === 0 ? <NoInvoices/> : <InvoicesList invoices={filteredInvoices}/>}
		</Wrapper>
	)
}