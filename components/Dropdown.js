import { useState } from 'react'
import styled from 'styled-components'
import { Heading4 } from './Headings'
import { TextA } from './Typography'

const Header = styled.button`
    height: 2rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;

    span {
        margin-right: 1rem;
    }

    img {
        transition: transform .3s;
    }
`

const Options = styled.form`
    position: absolute;
    bottom: -9rem;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 12rem;
    border-radius: 8px;
    box-shadow: 0px 10px 20px ${props => props.theme.color.dropdown.shadow};
    padding: 1.5rem;
    background: ${props => props.theme.color.dropdown.bg};

    transition: box-shadow .3s, background .3s;
`

const Wrapper = styled.div`
    position: relative;

    ${Header} {
        img {
            transform: ${props => props.open ? 'rotate(-180deg)' : 'rotate(0)'};
        }
    }

    ${Options} {
        display: ${props => props.open ? 'flex' : 'none'};
    }
`

// option items

const StyledOption = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
        display: none;

        :hover + div {
            border: 1px solid #7C5DFA;
        }

        :checked + div {
            background: #7C5DFA;

            > img {
                opacity: 1;
            }
        }
    }

    span {
        ${TextA}
        color: ${props => props.theme.color.text.heading};
        font-weight: bold;
        margin-bottom: -1px;
    }
`

const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;
    border: 1px solid transparent;
    border-radius: 2px;
    background: ${props => props.theme.color.checkbox.bg};

    img {
        opacity: 0;
    }
`

function Option({ children }) {
    return (
        <StyledOption>
            <input type="checkbox"/>
            <Checkbox>
                <img src="/images/icon-check.svg" alt=""/>
            </Checkbox>
            <span>{children}</span>
        </StyledOption>
    )
}

export default function Dropdown() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    return (
        <Wrapper open={open}>
            <Header id="dropdown-filter-header" aria-controls="dropdown-filter-options" onClick={() => setOpen(!open)}>
                <Heading4 as="span">Filter by status</Heading4>
                <img src="/images/icon-arrow-down.svg" alt=""/>
            </Header>
            <Options id="dropdown-filter-options" aria-labelledby="dropdown-filter-header">
                <Option>Paid</Option>
                <Option>Pending</Option>
                <Option>Draft</Option>
            </Options>
        </Wrapper>
    )
}