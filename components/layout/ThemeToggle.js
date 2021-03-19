import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Button = styled.button`
    border: none;
    padding: .25rem;
    background: transparent;
    cursor: pointer;
    outline: none;

    :focus-visible {
        outline: 2px dotted #7E88C3;
    }
`

const Icon = styled.img`
    border-radius: 50%;
`

export default function ThemeToggle({ className, toggleTheme }) {
    const theme = useContext(ThemeContext)

    return (
        <Button className={className} onClick={toggleTheme}>
            <Icon src={theme.icon.path} alt={theme.icon.alt}/>
        </Button>
    )
}