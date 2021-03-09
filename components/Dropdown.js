import { useState } from 'react'
import styled from 'styled-components'
import DropdownOption from './DropdownOption'
import { Heading4 } from './Headings'

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

export default function Dropdown({ setFilter }) {
    const [open, setOpen] = useState(false)

    const [options, setOptions] = useState([
        {
            id: 0,
            value: 'paid',
            checked: false
        },
        {
            id: 1,
            value: 'pending',
            checked: false
        },
        {
            id: 2,
            value: 'draft',
            checked: false
        }
    ])

    function handleClick(id) {
        setOptions(options.map((option) => {
            if (id === option.id) {
                setFilter(option.checked ? null : option.value)
                return {...option, checked: !option.checked}
            }
            return {...option, checked: false}
        }))
    }

    return (
        <Wrapper open={open}>
            <Header id="dropdown-filter-header" aria-controls="dropdown-filter-options" onClick={() => setOpen(!open)}>
                <Heading4 as="span">Filter by status</Heading4>
                <img src="/images/icon-arrow-down.svg" alt=""/>
            </Header>
            <Options id="dropdown-filter-options" aria-labelledby="dropdown-filter-header">
                {options.map((option) => {
                    return (
                        <DropdownOption key={option.id} id={option.id} checked={option.checked} handleClick={handleClick}>
                            {option.value}
                        </DropdownOption>
                    )
                })}
            </Options>
        </Wrapper>
    )
}