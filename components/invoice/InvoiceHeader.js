import styled from 'styled-components'

import InvoiceStatus from '../shared/InvoiceStatus'
import Button from '../shared/Buttons'
import { fontStylesA } from '../shared/Typography'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    padding: 1.5rem;
    background: ${props => props.theme.color.invoiceItem.bg};
    transition: background .3s;
`

const Status = styled.span`
    ${fontStylesA}
    margin-right: auto;

    @media only screen and (min-width: 650px) {
        margin-right: 1rem;
    }
`

const Buttons = styled.div`
    display: none;

    @media only screen and (min-width: 650px) {
        display: flex;
        gap: .5rem;
        margin-left: auto;
    }
`

export default function InvoiceHeader({ className, status, setPopupIsOpen, setFormIsOpen, handlePaid }) {
    return (
        <Wrapper className={className}>
            <Status>Status</Status>
            <InvoiceStatus status={status}/>
            <Buttons>
                <Button secondary onClick={() => setFormIsOpen(true)}>Edit</Button>
                <Button alert onClick={() => setPopupIsOpen(true)}>Delete</Button>
                {status !== 'paid' ? <Button onClick={handlePaid}>Mark As Paid</Button> : null}
            </Buttons>
        </Wrapper>
    )
}