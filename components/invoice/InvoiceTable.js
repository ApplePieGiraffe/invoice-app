import styled from 'styled-components'

import { fontStylesB } from '../shared/Typography'
import { addCommas } from '../../utilities/Misc'

const Wrapper = styled.div`
    border-radius: 8px;
    overflow: hidden;
`

const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    padding-top: 2rem;
    background: ${props => props.theme.color.invoiceTable.bg};
    transition: background .3s;
`

// table head

const TableHead = styled.thead`
    display: none;
    ${fontStylesB}

    th {
        padding: 0 0 2rem 0;
        font-weight: 500;
        text-align: end;
    }

    th:nth-child(1) {
        padding: 0 0 2rem 2rem;
        text-align: start;
    }

    th:nth-child(2) {
        text-align: center;
    }

    th:last-child {
        padding: 0 2rem 2rem 0;
    }

    @media only screen and (min-width: 550px) {
        display: table-header-group;
    }
`

// table body

const TableBody = styled.tbody`
    td {
        font-size: .75rem;
        font-weight: bold;
        transition: color .3s;
    }
`

const ItemName = styled.td`
    padding: 0 0 2rem 2rem;
    color: ${props => props.theme.color.text.heading};
    text-align: start;
`

const ItemQuantity = styled.td`
    display: none;
    ${fontStylesB}
    text-align: center;

    @media only screen and (min-width: 550px) {
        display: table-cell;
        padding: 0 0 2rem 0;
    }
`

const ItemPrice = styled.td`
    display: none;
    ${fontStylesB}
    text-align: end;

    @media only screen and (min-width: 550px) {
        display: table-cell;
        padding: 0 0 2rem 0;
    }
`

const ItemTotal = styled.td`
    padding: 0 2rem 2rem 0;
    color: ${props => props.theme.color.text.heading};
    text-align: end;
`

// table footer

const TableFooter = styled.tfoot`
    background: ${props => props.theme.color.invoiceTable.footerBg};
    transition: background .3s;
`

const Amount = styled.th`
    padding: 2rem 0 2rem 2rem;
    color: white;
    font-size: .6875rem;
    text-align: start;
`

const EmptyTd = styled.td`
    display: none;

    @media only screen and (min-width: 550px) {
        display: table-cell;
        padding: 0;
    }
`

const Total = styled.td`
    padding: 2rem 2rem 2rem 0;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: end;

    @media only screen and (min-width: 550px) {
        font-size: 1.5rem;
    }
`

export default function InvoiceTable({ className, items, total }) {
    return (
        <Wrapper className={className}>
            <Table>
                <TableHead>
                    <tr>
                        <th>Item Name</th>
                        <th>QTY.</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {items.map((item) => {
                        return (
                            <tr key={item.name}>
                                <ItemName>{item.name}</ItemName>
                                <ItemQuantity>{item.quantity}</ItemQuantity>
                                <ItemPrice>{`£${addCommas(item.price)}`}</ItemPrice>
                                <ItemTotal>{`£${addCommas(item.total)}`}</ItemTotal>
                            </tr>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <tr>
                        <Amount>Amount Due</Amount>
                        <EmptyTd></EmptyTd>
                        <EmptyTd></EmptyTd>
                        <Total>{total ? `£${addCommas(total)}` : ''}</Total>
                    </tr>
                </TableFooter>
            </Table>
        </Wrapper>
    )
}