import styled from 'styled-components'
import Dropdown from './Dropdown'
import { Heading1 } from './Headings'
import { TextA } from './Typography'
import { ButtonPlus } from './Buttons'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 4rem;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
`

const Heading = styled(Heading1)`
    margin-bottom: .5rem;
`

const Subheading = styled.div`
    ${TextA}
`

const Button = styled(ButtonPlus)`
    margin-left: 1rem;

    .btn-plus-invoice {
        display: none;
    }

    @media only screen and (min-width: 550px) {
        margin-left: 2.5rem;

        .btn-plus-invoice {
            display: initial;
        }
    }
`

export default function Header({ invoices, setFilter }) {
    return (
        <Wrapper>
            <TextWrapper>
                <Heading>Invoices</Heading>
                <Subheading>There are {invoices && invoices.length} total invoices.</Subheading>
            </TextWrapper>
            <Dropdown setFilter={setFilter}/>
            <Button>New <span className="btn-plus-invoice">Invoice</span></Button>
        </Wrapper>
    )
}