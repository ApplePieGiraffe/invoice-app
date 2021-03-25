import styled from 'styled-components'
import { motion } from 'framer-motion'

import Button from '../shared/Buttons'

const Wrapper = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: .5rem;
    width: 100%;
    padding: 1.5rem;
    background: ${props => props.theme.color.invoiceItem.bg};
    transition: background .3s;

    @media only screen and (min-width: 650px) {
        display: none;
    }
`

export default function InvoiceFooter({ status, setPopupIsOpen, setFormIsOpen, handlePaid }) {
    return (
        <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Button secondary onClick={() => setFormIsOpen(true)}>Edit</Button>
            <Button alert onClick={() => setPopupIsOpen(true)}>Delete</Button>
            {status !== 'paid' ? <Button onClick={handlePaid}>Mark As Paid</Button> : null}
        </Wrapper>
    )
}