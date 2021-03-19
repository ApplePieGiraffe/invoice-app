import { useEffect } from 'react'
import { useFormikContext } from 'formik'
import styled from 'styled-components'

import Input from './Input'
import { DeleteButton } from '../shared/Buttons'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 4rem repeat(4, 1fr) min-content;
    gap: 1.5rem 1rem;
    margin-bottom: 3rem;

    > *:nth-child(1) {
        grid-column: 1 / -1;
    }

    > *:nth-child(3) {
        grid-column: 2 / span 2;
    }

    > *:nth-child(4) {
        grid-column: 4 / span 2;
    }

    > *:nth-child(5) {
        grid-column: -2 / -1;
    }

    @media only screen and (min-width: 600px) {
        grid-template-columns: 2.5fr 4.125rem 1.25fr .75fr min-content;
        margin-bottom: 1rem;

        > *:nth-child(1) {
            grid-column: 1 / span 1;
        }

        > *:nth-child(2) {
            grid-column: 2 / span 1;
        }

        > *:nth-child(3) {
            grid-column: 3 / span 1;
        }

        > *:nth-child(4) {
            grid-column: 4 / span 1;
        }

        > *:nth-child(5) {
            grid-column: 5 / span 1;
        }
    }
`

export default function Item({ index, helpers }) {
    const { values, setFieldValue } = useFormikContext()

    useEffect(() => {
        const total = values.items[index].quantity * values.items[index].price
        const rounded = Math.round((total + Number.EPSILON) * 100) / 100
        setFieldValue(`items[${index}].total`, rounded || '0')
    }, [values.items[index].quantity, values.items[index].price])

    return (
        <Wrapper key={index}>
            <Input 
                label="Item Name" 
                name={`items[${index}].name`} 
                hideLabels={index > 0}
            />

            <Input 
                label="Qty." 
                name={`items[${index}].quantity`} 
                hideLabels={index > 0}
            />

            <Input 
                label="Price" 
                name={`items[${index}].price`}
                hideLabels={index > 0}
            />

            <Input 
                label="Total" 
                name={`items[${index}].total`} 
                hideLabels={index > 0}
                disabled
                faded
            />

            <DeleteButton type="button" onClick={() => helpers.remove(index)}/>
        </Wrapper>
    )
}