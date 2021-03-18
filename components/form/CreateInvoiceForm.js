import { Formik } from 'formik'
import styled from 'styled-components'

import FormWrapper from './FormWrapper'
import Fields from './Fields'
import Button from '../shared/Buttons'
import { Heading2 } from '../shared/Headings'

import { initialValues, validationSchema } from '../../data/Form'

import { calcTotal } from '../../utilities/Form'
import { addInvoice } from '../../utilities/Invoices'
import { generateUniqueId } from '../../utilities/Id'

const Heading = styled(Heading2)`
    margin-bottom: 3rem;
    font-size: 1.5rem;
`

const Buttons = styled.div`
    display: flex;
    gap: .5rem;
    padding 2rem 0;

    > *:first-child {
        margin-right: auto;
    }

    > button {
        padding: 1rem;
    }

    @media only screen and (min-width: 450px) {
        > button {
            padding: 1rem 1.5rem;
        }
    }
`

export default function CreateInvoiceForm({ invoices, setInvoices, setOpen }) {
    function onSubmit(values) {
        const newInvoice = {
            id: generateUniqueId(invoices),
            ...values,
            paymentDue: '2021-08-19', // don't forget to put correct date here...
            status: 'pending',
            total: calcTotal(values.items)
        }
        addInvoice(newInvoice, invoices, setInvoices)
        setOpen(false)
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
        setOpen(false)
    }

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
            {formik => (
                <FormWrapper>
                    <Heading>Create Invoice</Heading>
                    <Fields/>
                    <Buttons>
                        <Button type="button" secondary onClick={() => setOpen(false)}>Discard</Button>
                        <Button type="button" tertiary onClick={() => addDraft(formik.values)}>Save as Draft</Button>
                        <Button type="submit">Save & Send</Button>
                    </Buttons>
                </FormWrapper>
            )}
        </Formik>
    )
}