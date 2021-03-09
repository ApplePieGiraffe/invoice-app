import styled from 'styled-components'
import InvoiceItem from '../components/InvoiceItem'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

export default function InvoicesList({ invoices }) {
    return (
        <Wrapper>
            {invoices && invoices.map((invoice) => {
                return (
                    <InvoiceItem
                    key={invoice.id}
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