import styled from 'styled-components'
import Button from './Button'

const StyledButton = styled(Button)`
    padding: .5rem;
    padding-right: 1rem;
`

const IconWrapper = styled.span`
    display: inline-flex;
    margin-right: 1rem;
    padding: .625rem;
    background: white;
    border-radius: 50%;
`

const Icon = styled.img`
    width: .625rem;
    height: .625rem;
`

export default function ButtonPlus({children}) {
    return (
        <StyledButton>
            <IconWrapper>
                <Icon src="/images/icon-plus.svg" alt=""/>
            </IconWrapper>
            {children}
        </StyledButton>
    )
}