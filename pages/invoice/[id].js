import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Wrapper from '../../components/invoice/Wrapper'
import DeletePopup from '../../components/invoice/DeletePopup'
import HomeLink from '../../components/invoice/HomeLink'
import InvoiceHeader from '../../components/invoice/InvoiceHeader'
import InvoiceBody from '../../components/invoice/InvoiceBody'
import InvoiceFooter from '../../components/invoice/InvoiceFooter'

import { markAsPaid } from '../../utilities/Invoices'

export default function Invoice({ invoices, setInvoices, handleDelete }) {
    const router = useRouter()
    const [id, setId] = useState(null)
    const [invoice, setInvoice] = useState(null)
    const [popupIsOpen, setPopupIsOpen] = useState(false)

    useEffect(() => {
        setId(router.query.id)
        setInvoice(invoices && invoices.find(invoice => router.query.id === invoice.id))
    }, [router.query, invoices])

    function handleCancel() {
        setPopupIsOpen(false)
    }

    function handlePaid() {
        markAsPaid(id, invoices, setInvoices)
    }

    return (
        <>
            <Head>
                <title>Invoice | {id && `#${id}`}</title>
            </Head>
            {popupIsOpen && <DeletePopup id={id} handleCancel={handleCancel} handleDelete={handleDelete}/>}
            <Wrapper>
                <HomeLink/>
                <InvoiceHeader 
                    className="invoice-page-header" 
                    status={invoice && invoice.status} 
                    setPopupIsOpen={setPopupIsOpen}
                    handlePaid={handlePaid}
                />
                {invoice && <InvoiceBody invoice={invoice}/>}
            </Wrapper>
            <InvoiceFooter 
                setPopupIsOpen={setPopupIsOpen}
                handlePaid={handlePaid}
            />
        </>
    )
}