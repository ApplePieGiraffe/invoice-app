import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import HomeLink from '../../components/HomeLink'
import InvoiceHeader from '../../components/InvoiceHeader'
import InvoiceBody from '../../components/InvoiceBody'
import InvoiceFooter from '../../components/InvoiceFooter'

import { markAsPaid } from '../../data/Utilities'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
	width: 100%;
	max-width: 45.625rem;
	height: 100%;
	margin: 0 auto;
    padding: 2rem 1.5rem 3.5rem 1.5rem;

    .invoice-page-header {
        margin-bottom: 1rem;
    }

    @media only screen and (min-width: 768px) {
        padding: 3.5rem 3rem;

        .invoice-page-header {
            margin-bottom: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 4.5rem 3rem;
    }
`

const StyledLink = styled(HomeLink)`
    margin-bottom: 2rem;
`

export default function Invoice({ invoices, setInvoices }) {
    const router = useRouter()
    const [id, setId] = useState(null)
    const [invoice, setInvoice] = useState(null)

    useEffect(() => {
        setId(router.query.id)
        setInvoice(invoices && invoices.find(invoice => router.query.id === invoice.id))
    }, [router.query, invoices])

    function handlePaid() {
        markAsPaid(id, invoices, setInvoices)
    }

    return (
        <>
            <Head>
                <title>Invoice | {id && `#${id}`}</title>
            </Head>
            <Wrapper>
                <StyledLink/>
                <InvoiceHeader className="invoice-page-header" status={invoice && invoice.status} handlePaid={handlePaid}/>
                {invoice && <InvoiceBody invoice={invoice}/>}
            </Wrapper>
            <InvoiceFooter handlePaid={handlePaid}/>
        </>
    )
}