import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import Wrapper from '../../components/invoice/Wrapper'
import EditInvoiceForm from '../../components/form/EditInvoiceForm'
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
    const [formIsOpen, setFormIsOpen] = useState(false)

    useEffect(() => {
        setId(router.query.id)
        setInvoice(invoices?.find(invoice => router.query.id === invoice.id))
    }, [router.query, invoices])

    function handlePaid() {
        markAsPaid(id, invoices, setInvoices)
    }

    return (
        <>
            <Head>
                <title>Invoice | {id && `#${id}`}</title>
            </Head>
            <DeletePopup 
                id={id} 
                popupIsOpen={popupIsOpen} 
                setPopupIsOpen={setPopupIsOpen} 
                handleDelete={handleDelete}
            />
            <EditInvoiceForm
                invoice={invoice}
                invoices={invoices} 
                setInvoices={setInvoices}
                isOpen={formIsOpen}
                setIsOpen={setFormIsOpen}
            />
            <Wrapper>
                <HomeLink/>
                <InvoiceHeader 
                    className="invoice-page-header" 
                    status={invoice?.status} 
                    setPopupIsOpen={setPopupIsOpen}
                    setFormIsOpen={setFormIsOpen}
                    handlePaid={handlePaid}
                />
                <AnimatePresence>
                    {invoice && <InvoiceBody invoice={invoice}/>}
                </AnimatePresence>
            </Wrapper>
            <InvoiceFooter 
                status={invoice?.status}
                setPopupIsOpen={setPopupIsOpen}
                setFormIsOpen={setFormIsOpen}
                handlePaid={handlePaid}
            />
        </>
    )
}