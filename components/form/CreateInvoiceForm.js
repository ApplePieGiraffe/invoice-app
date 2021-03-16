import { Formik } from 'formik'
import * as Yup from 'yup'

import Form from './Form'

const initialValues = {
    senderAddress: {
        street: '',
        city: '',
        postCode: '',
        country: ''
    },
    clientName: '',
    clientEmail: '',
    clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: ''
    },
    paymentDue: '',
    paymentTerms: '',
    description: '',
    items: []
}

const validationSchema = Yup.object().shape({
    senderAddress: Yup.object().shape({
        street: Yup.string().required(`Can't be empty.`),
        city: Yup.string().required(`Can't be empty.`),
        postCode: Yup.string().required(`Can't be empty.`),
        country: Yup.string().required(`Can't be empty.`),
    }),
    clientName: Yup.string().required(`Can't be empty.`),
    clientEmail: Yup.string().email('Invalid email.').required(`Can't be empty.`),
    clientAddress: Yup.object().shape({
        street: Yup.string().required(`Can't be empty.`),
        city: Yup.string().required(`Can't be empty.`),
        postCode: Yup.string().required(`Can't be empty.`),
        country: Yup.string().required(`Can't be empty.`),
    }),
    paymentDue: Yup.string().required(`Can't be empty.`),
    paymentTerms: Yup.string().required(`Can't be empty.`),
    description: Yup.string().required(`Can't be empty.`),
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
                    // console.log(formik)
                    return <Form/>
                }
            }
        </Formik>
    )
}