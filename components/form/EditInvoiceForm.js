import { Formik } from 'formik'

import Form from './Form'
import Fields from './Fields'
import Button from '../shared/Buttons'
import { 
    EditInvoiceFormHeading as Heading, 
    EditInvoiceFormButtons as Buttons 
} from './Components'

import { validationSchema } from '../../data/Form'

import { createNewInvoice } from '../../utilities/Form'
import { updateInvoice } from '../../utilities/Invoices'

export default function CreateInvoiceForm({ invoice, invoices, setInvoices, setOpen }) {
    function onSubmit(values) {
        // ...
        setOpen(false)
    }

    return (
        <Formik 
            initialValues={initialValues} 
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