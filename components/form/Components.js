import styled from 'styled-components'

import { Heading2 } from '../shared/Headings'

export const CreateInvoiceFormHeading = styled(Heading2)`
    margin-bottom: 3rem;
    font-size: 1.5rem;
`

export const CreateInvoiceFormButtons = styled.div`
    display: flex;
    gap: .5rem;
    padding 2rem 0;

    > *:first-child {
        margin-right: auto;
    }

    > button {
        padding: 1rem;
    }

    @media only screen and (min-width: 450px) {
        > button {
            padding: 1rem 1.5rem;
        }
    }
`