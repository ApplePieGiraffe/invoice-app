import { FieldArray, useFormikContext } from 'formik'
import styled from 'styled-components'

import Button from '../shared/Buttons'
import Item from './Item'
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
                                <Item key={index} index={index} helpers={helpers}/>
                            ))}
                            <Button 
                                type="button" 
                                quaternary wide 
                                onClick={() => helpers.push({name: '', quantity: '', price: '', total: ''})}
                            >
                                + Add New Item
                            </Button>
                        </ItemList>
                    )
                }
            />
        </Wrapper>
    )
}