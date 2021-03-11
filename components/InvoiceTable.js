import styled from 'styled-components'

import { TextB } from './Typography'
import { addCommas } from '../data/Utilities'

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
    ${TextB}

    th {
        padding: 2rem;
        padding-top: 0;
        font-weight: 500;
        text-align: end;
    }

    th:nth-child(1) {
        text-align: start;
    }

    th:nth-child(2) {
        text-align: center;
    }

    @media only screen and (min-width: 550px) {
        display: table-header-group;
    }
`

// table body

const TableBody = styled.tbody`
    td {
        padding: 2rem;
        padding-top: 0;
        font-size: .75rem;
        font-weight: bold;
        transition: color .3s;
    }
`

const ItemName = styled.td`
    color: ${props => props.theme.color.text.heading};
    text-align: start;
`

const ItemQuantity = styled.td`
    display: none;
    ${TextB}
    text-align: center;

    @media only screen and (min-width: 550px) {
        display: table-cell;
    }
`

const ItemPrice = styled.td`
    display: none;
    ${TextB}
    text-align: end;

    @media only screen and (min-width: 550px) {
        display: table-cell;
    }
`

const ItemTotal = styled.td`
    color: ${props => props.theme.color.text.heading};
    text-align: end;
`

// table footer

const TableFooter = styled.tfoot`
    background: ${props => props.theme.color.invoiceTable.footerBg};
    transition: background .3s;
`

const Amount = styled.th`
    padding: 2rem;
    color: white;
    font-size: .6875rem;
    text-align: start;
`

const EmptyTd = styled.td`
    display: none;

    @media only screen and (min-width: 550px) {
        display: table-cell;
    }
`

const Total = styled.td`
    padding: 2rem;
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
                                <ItemPrice>£{addCommas(item.price)}</ItemPrice>
                                <ItemTotal>£{addCommas(item.total)}</ItemTotal>
                            </tr>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <tr>
                        <Amount>Amount</Amount>
                        <EmptyTd></EmptyTd>
                        <EmptyTd></EmptyTd>
                        <Total>£{addCommas(total)}</Total>
                    </tr>
                </TableFooter>
            </Table>
        </Wrapper>
    )
}