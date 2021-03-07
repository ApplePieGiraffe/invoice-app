import styled from 'styled-components'
import InvoiceItem from '../components/InvoiceItem'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default function InvoicesList({ invoices }) {
    return (
        <Wrapper>
            {invoices && invoices.map((invoice) => {
                return (
                    <InvoiceItem 
                    id={invoice.id}
                    paymentDue={invoice.paymentDue}
                    clientName={invoice.clientName}
                    total={invoice.total}
                    status={invoice.status}/>
                )
            })}
        </Wrapper>
    )
}