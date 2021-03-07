import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    border-radius: 8px;
    padding: 1.5rem;
    background: white;
`

const ID = styled.div`
    font-weight: 700;
    font-size: .75rem;
    line-height: 1.25;        
    letter-spacing: -0.25px;

    span {
        color: #7E88C3;
    }
`

export default function InvoiceItem({ id, paymentDue, clientName, total, status }) {
    return (
        <Wrapper>
            <ID><span>#</span>{id}</ID>
        </Wrapper>
    )
}