import { Formik } from 'formik'
import * as Yup from 'yup'

import Form from './Form'

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
//     paymentTerms: '',
//     createdAt: '',
//     description: '',
//     items: []
// }

const initialValues = {
    senderAddress: {
        street: '24133 Baker Street',
        city: 'Brownsville',
        postCode: 'PO Box 7791',
        country: 'USA'
    },
    clientName: 'Luke Skywalker',
    clientEmail: 'lukeskywalker@example.com',
    clientAddress: {
        street: '#EA-T100.95',
        city: 'Coruscant',
        postCode: 'SO Box 89aas78',
        country: 'Space'
    },
    createdAt: '',
    description: 'Mostly Jedi stuff... none of your business!',
    items: []
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
    description: Yup.string().required('Required'),
    items: Yup.array().required()
})

function onSubmit(values) {
    console.log('values', values)
}

export default function CreateInvoiceForm() {
    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
            {
                (formik) => {
                    return (
                        <Form/>
                    )
                }
            }
        </Formik>
    )
}