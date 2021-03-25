import { useState, useEffect } from 'react'
import Head from 'next/head'

import Main from '../components/home/Main'
import Wrapper from '../components/home/Wrapper'
import Header from '../components/home/Header'
import NoInvoices from '../components/home/NoInvoices'
import InvoicesList from '../components/home/InvoicesList'

import CreateInvoiceForm from '../components/form/CreateInvoiceForm'

export default function Home({ invoices, setInvoices }) {
	const [filter, setFilter] = useState(null)
	const [filteredInvoices, setFilteredInvoices] = useState(null)
	const [formIsOpen, setFormIsOpen] = useState(false)
	
	useEffect(() => {
		setFilteredInvoices(invoices)

		if (invoices && filter) {
			setFilteredInvoices(invoices.filter((invoice) => {
				return invoice.status === filter
			}))
		}
	}, [invoices, filter])

	return (
		<>
			<Head>
				<title>
					Invoices {filteredInvoices && 
					filteredInvoices.length !== 0 && 
					`(${filteredInvoices.length})` || 
					''} | Frontend Mentor
				</title>
			</Head>
			<Main>
				<CreateInvoiceForm 
					invoices={invoices} 
					setInvoices={setInvoices}
					isOpen={formIsOpen}
					setIsOpen={setFormIsOpen}
				/>
				<Wrapper>
					<Header 
						invoices={filteredInvoices} 
						filter={filter} 
						setFilter={setFilter}
						setFormIsOpen={setFormIsOpen}
					/>
					{filteredInvoices?.length === 0 ? 
						<NoInvoices/> : 
						<InvoicesList invoices={filteredInvoices}/>
					}
				</Wrapper>
			</Main>
		</>
	)
}