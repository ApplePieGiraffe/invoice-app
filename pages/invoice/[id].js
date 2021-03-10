import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import HomeLink from '../../components/StyledLink'
import InvoiceHeader from '../../components/InvoiceHeader'
import InvoiceBody from '../../components/InvoiceBody'
import InvoiceFooter from '../../components/InvoiceFooter'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
	width: 100%;
	max-width: 45.625rem;
	height: 100%;
	margin: 0 auto;

    > a {
        margin-bottom: 2rem;
    }

    .invoice-page-header {
        margin-bottom: 1rem;
    }

    @media only screen and (min-width: 768px) {
        .invoice-page-header {
            margin-bottom: 1.5rem;
        }
    }
`

export default function Invoice({ invoices }) {
    const router = useRouter()
    const [id, setId] = useState(null)
    const [invoice, setInvoice] = useState(null)

    useEffect(() => {
        setId(router.query.id)
        setInvoice(invoices && invoices.find(invoice => router.query.id === invoice.id))
    }, [router.query])

    return (
        <>
            <Head>
                <title>Invoice | {id && `#${id}`}</title>
            </Head>
            <Wrapper>
                <HomeLink/>
                <InvoiceHeader className="invoice-page-header" status={invoice && invoice.status}/>
                {invoice && <InvoiceBody invoice={invoice}/>}
            </Wrapper>
            {/* <InvoiceFooter/> */}
        </>
    )
}