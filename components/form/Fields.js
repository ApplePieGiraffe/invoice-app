import { useFormikContext } from 'formik'
import styled from 'styled-components'
import { TouchScrollable } from 'react-scrolllock'

import DatePicker from './DatePicker'
import Input from './Input'
import Items from './Items'
import Select from './Select'

import { fontStylesA } from '../shared/Typography'

import { reduceErrors } from '../../utilities/Form'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1rem;
    overflow-y: scroll;

    @media only screen and (min-width: 500px) {
        padding-right: 2rem;
    } 
`

const FieldSet = styled.fieldset`
    border: none;
`

const Legend = styled.legend`
    margin-bottom: 1.5rem;
    ${fontStylesA}
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

const OtherFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    > *:nth-child(1) {
        grid-column: 1 / 2;
    }

    > *:nth-child(2) {
        grid-column: 2 / -1;
    }

    > *:nth-child(3) {
        grid-column: 1 / -1;
    }
`

const Errors = styled.div`
    margin-top: -1rem;
`

const Error = styled.div`
    color: #EC5757;
    font-size: .625rem;
    font-weight: bold;
    line-height: 1rem;
`

const dropdownOptions = [
    {name: 'Net 1 Day', value: 1},
    {name: 'Net 7 Days', value: 7},
    {name: 'Net 14 Days', value: 14},
    {name: 'Net 30 Days', value: 30}
]

export default function Fields() {
    const formik = useFormikContext()

    return (
        <TouchScrollable>
            <Wrapper>
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
                        <Input label="Client's Email" name="clientEmail" placeholder="e.g. email@example.com"/>
                        <Input label="Street Address" name="clientAddress.street"/>
                        <Input label="City" name="clientAddress.city"/>
                        <Input label="Post Code" name="clientAddress.postCode"/>
                        <Input label="Country" name="clientAddress.country"/>
                    </BillTo>
                </FieldSet>

                <FieldSet>
                    <OtherFields>
                        <DatePicker label="Invoice Date" name="createdAt"/>
                        <Select label="Payment Terms" name="paymentTerms" options={dropdownOptions}/>
                        <Input label="Description" name="description" placeholder="e.g. Graphic Design Service"/>
                    </OtherFields>
                </FieldSet>

                <Items name="items"/>

                {formik.submitCount > 0 && formik.errors && 
                    <Errors>
                        {reduceErrors(formik.errors).map((item, index) => (
                            <Error key={index}>{item}</Error>
                        ))}
                    </Errors>
                }
            </Wrapper>
        </TouchScrollable>
    )
}