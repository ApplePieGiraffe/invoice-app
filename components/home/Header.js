import styled from 'styled-components'

import Dropdown from './Dropdown'
import { Heading1 } from '../shared/Headings'
import { fontStylesA } from '../shared/Typography'
import { ButtonPlus } from '../shared/Buttons'

import { invoicesMessage } from '../../utilities/Misc'

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
    font-size: 1.25rem;

    @media only screen and (min-width: 550px) {
        font-size: 2rem;
    }
`

const Subheading = styled.div`
    ${fontStylesA}
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

export default function Header({ invoices, filter, setFilter, setCreateInvoiceIsOpen }) {
    const message = invoicesMessage(invoices && invoices.length, filter)

    return (
        <Wrapper>
            <TextWrapper>
                <Heading>Invoices</Heading>
                <Subheading>{message}</Subheading>
            </TextWrapper>
            <Dropdown setFilter={setFilter}/>
            <Button onClick={() => setCreateInvoiceIsOpen(true)}>New <span className="btn-plus-invoice">Invoice</span></Button>
        </Wrapper>
    )
}