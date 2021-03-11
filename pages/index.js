import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Main from '../components/Main'
import Header from '../components/Header'
import NoInvoices from '../components/NoInvoices'
import InvoicesList from '../components/InvoicesList'

const StyledMain = styled(Main)`
    padding: 2rem 1.5rem;

    @media only screen and (min-width: 768px) {
        padding: 3.5rem 3rem;
    }

    @media only screen and (min-width: 1024px) {
        padding: 4.5rem 3rem;
    }
`

const Wrapper = styled.div`
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
		// console.log('rendered')
	}, [invoices, filter])

	return (
		<>
			<Head>
				<title>Invoices {filteredInvoices && filteredInvoices.length !== 0 && `(${filteredInvoices.length})`} | Frontend Mentor</title>
			</Head>
			<StyledMain>
				<Wrapper>
					<Header invoices={filteredInvoices} filter={filter} setFilter={setFilter}/>
					{invoices && invoices.length === 0 ? <NoInvoices/> : <InvoicesList invoices={filteredInvoices}/>}
				</Wrapper>
			</StyledMain>
		</>
	)
}