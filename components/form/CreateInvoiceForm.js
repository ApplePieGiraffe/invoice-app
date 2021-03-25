import { Formik } from 'formik'
import { AnimatePresence } from 'framer-motion'

import Form from './Form'
import Fields from './Fields'
import Button from '../shared/Buttons'
import { 
    CreateInvoiceFormHeading as Heading,
    CreateInvoiceFormButtons as Buttons
} from './Components'

import { initialValues, validationSchema } from '../../data/Form'

import { createInvoice } from '../../utilities/Form'
import { generateUniqueId } from '../../utilities/Id'
import { addInvoice } from '../../utilities/Invoices'

export default function CreateInvoiceForm({ invoices, setInvoices, isOpen, setIsOpen }) {
    function onSubmit(values) {
        const newInvoice = {...createInvoice('pending', values), id: generateUniqueId(invoices)}
        addInvoice(newInvoice, invoices, setInvoices)
        setIsOpen(false)
    }

    function addDraft(values) {
        const newInvoice = {...createInvoice('draft', values), id: generateUniqueId(invoices)}
        addInvoice(newInvoice, invoices, setInvoices)
        setIsOpen(false)
    }

    return (
        <AnimatePresence>
            {isOpen &&
                <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
                >
                    {formik => (
                        <Form setIsOpen={setIsOpen}>
                            <Heading>Create Invoice</Heading>
                            <Fields/>
                            <Buttons>
                                <Button type="button" secondary onClick={() => setIsOpen(false)}>Discard</Button>
                                <Button type="button" tertiary onClick={() => addDraft(formik.values)}>Save as Draft</Button>
                                <Button type="submit">Save & Send</Button>
                            </Buttons>
                        </Form>
                    )}
                </Formik>
            }
        </AnimatePresence>
    )
}