import * as Yup from 'yup'

export const initialValues = {
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
    createdAt: new Date(),
    paymentTerms: '4',
    description: '',
    items: []
}

export const validationSchema = Yup.object().shape({
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
    items: Yup.array().required()
})