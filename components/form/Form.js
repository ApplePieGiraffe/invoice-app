import { Form as FormikForm } from 'formik'
import styled from 'styled-components'

import Backdrop from './Backdrop'
import Button from '../shared/Buttons'
import Fields from './Fields'

import { Heading2 } from '../shared/Headings'

const Wrapper = styled.div`
    position: absolute;
    top: 5rem;
    left: 0;
    background: ${props => props.theme.color.form.bg};
    transition: background .3s;

    @media only screen and (min-width: 600px) {
        border-radius: 0 20px 20px 0;
    }

    @media only screen and (min-width: 900px) {
        top: 0;
        padding-left: 6.4375rem;
        border-radius: 0 20px 20px 0;
    }
`

const StyledForm = styled(FormikForm)`
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    height: calc(100vh - 5rem);
    width: 100vw;
    max-width: 40rem;
    padding: 2rem 1.5rem 0 1.5rem;

    @media only screen and (min-width: 500px) {
        padding: 2.5rem 2rem 0 2.5rem;
    }

    @media only screen and (min-width: 600px) {
        padding: 3.5rem 2rem 0 3.5rem;
    }

    @media only screen and (min-width: 900px) {
        height: 100vh;
    }
`

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
`

export default function Form({ type, id, setCreateInvoiceIsOpen, addDraft }) {
    return (
        <Backdrop>
            <Wrapper>
                <StyledForm>
                    {type === 'create' && <Heading>Create Invoice</Heading>}
                    {type === 'edit' && <Heading>Edit <span>#</span>{id}</Heading>}

                    <Fields/>

                    <Buttons>
                        <Button type="button" secondary onClick={() => setCreateInvoiceIsOpen(false)}>Discard</Button>
                        <Button type="button" tertiary onClick={addDraft}>Save as Draft</Button>
                        <Button type="submit">Save & Send</Button>
                    </Buttons>
                </StyledForm>
            </Wrapper>
        </Backdrop>
    )
}