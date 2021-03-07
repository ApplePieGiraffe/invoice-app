import styled from 'styled-components'
import InvoicesList from '../components/InvoicesList'

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 45.625rem;
`

export default function Home({ invoices }) {
	return (
		<Wrapper>
			<InvoicesList invoices={invoices}/>
		</Wrapper>
	)
}