import styled from 'styled-components'

import { TextA } from '../shared/Typography'

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
        text-transform: capitalize;
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

export default function DropdownOption({ id, checked, handleClick, children }) {
    return (
        <StyledOption>
            <input type="checkbox" checked={checked} onChange={() => {handleClick(id)}}/>
            <Checkbox>
                <img src="/images/icon-check.svg" alt=""/>
            </Checkbox>
            <span>{children}</span>
        </StyledOption>
    )
}