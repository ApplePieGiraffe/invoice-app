import { FieldArray, useFormikContext } from 'formik'
import styled from 'styled-components'

import Button from '../shared/Buttons'
import Input from './Input'
import { DeleteButton } from '../shared/Buttons'
import { fontStylesA } from '../shared/Typography'

const Wrapper = styled.fieldset`
    border: none;
`

const Legend = styled.legend`
    margin-bottom: 1.5rem;
    ${fontStylesA}
    color: #777F98;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 2rem;
`

const ItemList = styled.div``

const Item = styled.div`
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

export default function Items({ name }) {
    const { values } = useFormikContext()
    return (
        <Wrapper>
            <Legend>ItemList</Legend>
            <FieldArray 
                name={name}
                render={
                    helpers => (
                        <ItemList>
                            {values.items.map((item, index) => (
                                <Item key={index}>
                                    <Input 
                                        label="Item Name" 
                                        name={`${name}[${index}].name`} 
                                        hideLabels={index > 0}
                                        hideErrors="true"
                                    />

                                    <Input 
                                        label="Qty." 
                                        name={`${name}[${index}].quantity`} 
                                        hideLabels={index > 0}
                                        hideErrors="true"
                                    />

                                    <Input 
                                        label="Price" 
                                        name={`${name}[${index}].price`} 
                                        hideLabels={index > 0}
                                        hideErrors="true"
                                    />

                                    <Input 
                                        label="Total" 
                                        name={`${name}[${index}].total`} 
                                        hideLabels={index > 0}
                                        hideErrors="true"
                                        value={values.items[index].quantity * values.items[index].price || '0.00'}
                                        faded
                                    />

                                    <DeleteButton type="button" onClick={() => helpers.remove(index)}/>
                                </Item>
                            ))}
                            <Button type="button" quaternary wide onClick={() => helpers.push({name: '', quantity: '', price: '', total: ''})}>+ Add New Item</Button>
                        </ItemList>
                    )
                }
            />
        </Wrapper>
    )
}