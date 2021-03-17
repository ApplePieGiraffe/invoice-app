import styled, { css } from 'styled-components'

const Button = styled.button`
    width: ${props => props.wide ? '100%' : 'initial'};
    border: none;
    border-radius: 10rem;
    padding: 1rem 1.5rem;
    background: #7C5DFA;

    color: white;
    font-family: 'Spartan', sans-serif;
    font-size: .75rem;
    font-weight: 700;
    letter-spacing: -0.25 px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;

    cursor: pointer;
    transition: background .3s, color .3s;
    outline: none;

    :hover {
        background: #9277FF;
    }

    ${props => props.secondary && css`
        background: ${props.theme.color.btn.secondary.bg};
        color: ${props.theme.color.btn.secondary.text};

        :hover {
            background: ${props.theme.color.btn.secondary.hover};
        }
    `}

    ${props => props.tertiary && css`
        background: ${props.theme.color.btn.tertiary.bg};
        color: ${props.theme.color.btn.tertiary.text};

        :hover {
            background: ${props.theme.color.btn.tertiary.hover};
        }
    `}

    ${props => props.alert && css`
        background: #EC5757;

        :hover {
            background: #FF9797;
        }
    `}

    ${props => props.quaternary && css`
        background: #EC5757;

        :hover {
            background: #FF9797;
        }
    `}
`

export default Button

// OTHER VARIANTS

// button with '+'

const StyledButton = styled(Button)`
    min-width: 5.875rem;
    padding: .5rem;
    padding-right: 1rem;
`

const IconWrapper = styled.span`
    display: inline-flex;
    margin-right: .5rem;
    padding: .625rem;
    background: white;
    border-radius: 50%;
`

const Icon = styled.img`
    width: .625rem;
    height: .625rem;
`

export function ButtonPlus({ children, ...rest }) {
    return (
        <StyledButton {...rest}>
            <IconWrapper>
                <Icon src="/images/icon-plus.svg" alt=""/>
            </IconWrapper>
            {children}
        </StyledButton>
    )
}