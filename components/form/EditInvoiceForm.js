import { Formik } from 'formik'
import dayjs from 'dayjs'

import Form from './Form'
import Fields from './Fields'
import Button from '../shared/Buttons'
import { 
    EditInvoiceFormHeading as Heading, 
    EditInvoiceFormButtons as Buttons 
} from './Components'

import { validationSchema } from '../../data/Form'

import { createInvoice } from '../../utilities/Form'
import { updateInvoice } from '../../utilities/Invoices'

export default function EditInvoiceForm({ invoice, invoices, setInvoices, setOpen }) {    
    function onSubmit(values) {
        const newInvoice = {...createInvoice(invoice.status, values), id: invoice.id}
        updateInvoice(newInvoice, invoices, setInvoices)
        setOpen(false)
    }

    return (
        <Formik 
            initialValues={{
                senderAddress: invoice.senderAddress,
                clientName: invoice.clientName,
                clientEmail: invoice.clientEmail,
                clientAddress: invoice.clientAddress,
                createdAt: new Date(invoice.createdAt),
                paymentTerms: invoice.paymentTerms,
                description: invoice.description,
                items: invoice.items
            }} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <Heading>Edit <span>#</span>{invoice.id}</Heading>
                    <Fields/>
                    <Buttons>
                        <Button type="button" secondary onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit">Save Changes</Button>
                    </Buttons>
                </Form>
            )}
        </Formik>
    )
}