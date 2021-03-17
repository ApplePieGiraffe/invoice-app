import { Formik } from 'formik'
import * as Yup from 'yup'

import Form from './Form'
import { addInvoice } from '../../utilities/Invoices'
import { emptyInvoice } from '../../utilities/Invoices'
import { generateUniqueId } from '../../utilities/Id'

// const initialValues = {
//     senderAddress: {
//         street: '',
//         city: '',
//         postCode: '',
//         country: ''
//     },
//     clientName: '',
//     clientEmail: '',
//     clientAddress: {
//         street: '',
//         city: '',
//         postCode: '',
//         country: ''
//     },
//     paymentDue: '',
//     paymentTerms: '4',
//     createdAt: '',
//     description: '',
//     items: []
// }

const initialValues = {
    senderAddress: {
        street: 'Plot 11 Ntinda Avenue',
        city: 'Kampala',
        postCode: 'PO Box 4431',
        country: 'Uganda'
    },
    clientName: 'Princess Leia',
    clientEmail: 'princessleia@example.com',
    clientAddress: {
        street: '24885 Basel Drive',
        city: 'Crestline',
        postCode: 'ZIP 82325',
        country: 'Crestline'
    },
    createdAt: '',
    paymentTerms: '4',
    description: 'Shoveling snow',
}

const validationSchema = Yup.object().shape({
    senderAddress: Yup.object().shape({
        street: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        postCode: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
    }),
    clientName: Yup.string().required('Required'),
    clientEmail: Yup.string().email('Invalid email.').required('Required'),
    clientAddress: Yup.object().shape({
        street: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        postCode: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
    }),
    createdAt: Yup.date().required('Required'),
    paymentTerms: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
})

export default function CreateInvoice({ invoices, setInvoices, setCreateInvoiceIsOpen }) {
    function onSubmit(values) {
        const newInvoice = {
            ...emptyInvoice,
            ...values,
            id: generateUniqueId(invoices),
            status: 'pending',
            total: '1000',
            items: [],
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
                        <Form type="create"/>
                    )
                }
            }
        </Formik>
    )
}