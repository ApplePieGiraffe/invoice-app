import styled from 'styled-components'

import FormWrapper from './FormWrapper'

import Button from '../shared/Buttons'
import Fields from './Fields'

import { Heading2 } from '../shared/Headings'

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

export default function Form({ type, id, setCreateInvoiceIsOpen, addDraft }) {
    return (
        <FormWrapper>
            {type === 'create' && <Heading>Create Invoice</Heading>}
            {type === 'edit' && <Heading>Edit <span>#</span>{id}</Heading>}

            <Fields/>

            <Buttons>
                <Button type="button" secondary onClick={() => setCreateInvoiceIsOpen(false)}>Discard</Button>
                <Button type="button" tertiary onClick={addDraft}>Save as Draft</Button>
                <Button type="submit">Save & Send</Button>
            </Buttons>
        </FormWrapper>
    )
}