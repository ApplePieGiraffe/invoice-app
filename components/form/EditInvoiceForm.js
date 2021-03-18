import { Formik } from 'formik'

import Form from './Form'

import { calcTotal } from '../../utilities/Form'
// get updateInvoice() function

// get initial values based on id...
import { validationSchema } from '../../data/Form'

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

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
            {
                (formik) => {
                    return (
                        <Form type="edit" formik={formik} setCreateInvoiceIsOpen={setCreateInvoiceIsOpen}/>
                    )
                }
            }
        </Formik>
    )
}