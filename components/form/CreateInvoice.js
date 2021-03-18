import { Formik } from 'formik'

import Form from './Form'

import { calcTotal } from '../../utilities/Form'
import { addInvoice } from '../../utilities/Invoices'
import { emptyInvoice } from '../../utilities/Invoices'
import { generateUniqueId } from '../../utilities/Id'

import { initialValues } from '../../data/Form'
import { validationSchema } from '../../data/Form'

// const initialValues = {
//     senderAddress: {
//         street: 'Plot 11 Ntinda Avenue',
//         city: 'Kampala',
//         postCode: 'PO Box 4431',
//         country: 'Uganda'
//     },
//     clientName: 'Princess Leia',
//     clientEmail: 'princessleia@example.com',
//     clientAddress: {
//         street: '24885 Basel Drive',
//         city: 'Crestline',
//         postCode: 'ZIP 82325',
//         country: 'Crestline'
//     },
//     createdAt: new Date(),
//     paymentTerms: '30',
//     description: 'Shoveling snow',
//     items: [{
//         name: 'Super Sneakers',
//         quantity: 1,
//         price: 150.00,
//         total: ''
//     }]
// }

export default function CreateInvoice({ invoices, setInvoices, setCreateInvoiceIsOpen }) {
    function onSubmit(values) {
        const newInvoice = {
            id: generateUniqueId(invoices),
            ...values,
            paymentDue: '2021-08-19', // don't forget to put correct date here...
            status: 'pending',
            total: calcTotal(values.items)
        }
        addInvoice(newInvoice, invoices, setInvoices)
        setCreateInvoiceIsOpen(false)
    }

    function addDraft(values) {
        const newInvoice = {
            id: generateUniqueId(invoices),
            ...values,
            paymentDue: '2021-08-19', // don't forget to put correct date here...
            status: 'draft',
            total: calcTotal(values.items)
        }
        addInvoice(newInvoice, invoices, setInvoices)
        setCreateInvoiceIsOpen(false)
    }

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
            {
                (formik) => {
                    return (
                        <Form type="create" formik={formik} addDraft={() => addDraft(formik.values)} setCreateInvoiceIsOpen={setCreateInvoiceIsOpen}/>
                    )
                }
            }
        </Formik>
    )
}