import { Form as FormikForm } from 'formik'
import styled from 'styled-components'

import Input from './Input'
import { Heading2 } from '../shared/Headings'
import { TextA } from '../shared/Typography'

const StyledForm = styled(FormikForm)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;

    height: 100%;
    width: 100%;
    max-width: 38.5rem;
    padding: 2rem 1.5rem;
    background: ${props => props.theme.color.form.bg};
    
    overflow-y: scroll;
    transition: background .3s;

    @media only screen and (min-width: 450px) {
        padding: 2.5rem;
    }

`

const Heading = styled(Heading2)`
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
`

const Fields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

const FieldSet = styled.fieldset`
    border: none;
`

const Legend = styled.legend`
    margin-bottom: 1.5rem;
    ${TextA}
    color: #7C5DFA;
    font-weight: bold;
`

const BillFrom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    > *:nth-child(1) {
        grid-column: 1 / -1;
    }

    > *:nth-child(2) {
        grid-column: 1 / 2;
    }

    > *:nth-child(3) {
        grid-column: 2 / -1;
    }

    > *:nth-child(4) {
        grid-column: 1 / -1;
    }

    @media only screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr 1fr;
    
        > *:nth-child(2) {
            grid-column: 1 / 2;
        }
    
        > *:nth-child(3) {
            grid-column: 2 / 3;
        }
    
        > *:nth-child(4) {
            grid-column: 3 / 4;
        }
    }
`

const BillTo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    > * {
        grid-column: 1 / -1;
    }

    > *:nth-child(4) {
        grid-column: 1 / 2;
    }

    > *:nth-child(5) {
        grid-column: 2 / -1;
    }

    @media only screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr 1fr;
    
        > *:nth-child(4) {
            grid-column: 1 / 2;
        }
    
        > *:nth-child(5) {
            grid-column: 2 / 3;
        }
    
        > *:nth-child(6) {
            grid-column: 3 / 4;
        }
    }
`

export default function Form() {
    return (
        <StyledForm>
            <Heading>New Invoice</Heading>
            <Fields>
                <FieldSet>
                    <Legend>Bill From</Legend>
                    <BillFrom>
                        <Input label="Street Address" name="senderAddress.street"/>
                        <Input label="City" name="senderAddress.city"/>
                        <Input label="Post Code" name="senderAddress.postCode"/>
                        <Input label="Country" name="senderAddress.country"/>
                    </BillFrom>
                </FieldSet>

                <FieldSet>
                    <Legend>Bill To</Legend>
                    <BillTo>
                        <Input label="Client's Name" name="clientName"/>
                        <Input label="Client's Email" name="clientEmail"/>
                        <Input label="Street Address" name="clientAddress.street"/>
                        <Input label="City" name="clientAddress.city"/>
                        <Input label="Post Code" name="clientAddress.postCode"/>
                        <Input label="Country" name="clientAddress.country"/>
                    </BillTo>
                </FieldSet>

                <FieldSet>
                        <Input label="Description" name="description"/>
                </FieldSet>
            </Fields>
        </StyledForm>
    )
}