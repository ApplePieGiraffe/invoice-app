import styled from 'styled-components'
import InvoiceStatus from './InvoiceStatus'
import Button from './Buttons'
import { TextA } from './Typography'

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: .5rem;
    padding: 1.5rem;
    background: ${props => props.theme.color.invoiceItem.bg};
    transition: background .3s;

    @media only screen and (min-width: 650px) {
        display: none;
    }
`

export default function InvoiceFooter() {
    return (
        <Wrapper>
            <Button secondary>Edit</Button>
            <Button alert>Delete</Button>
            <Button>Mark As Paid</Button>
        </Wrapper>
    )
}