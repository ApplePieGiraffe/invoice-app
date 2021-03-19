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

    :focus-visible {
        outline: 2px dotted #7E88C3;
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
        background: ${props.theme.color.btn.quaternary.bg};
        color: ${props.theme.color.btn.quaternary.text};

        :hover {
            background: ${props.theme.color.btn.quaternary.hover};
        }
    `}
`

export default Button

// button plus

const StyledButtonPlus = styled(Button)`
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
        <StyledButtonPlus {...rest}>
            <IconWrapper>
                <Icon src="/images/icon-plus.svg" alt=""/>
            </IconWrapper>
            {children}
        </StyledButtonPlus>
    )
}

// delete button

const StyledDeleteButton = styled.button`
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;

    svg {
        fill: #888EB0;
        transition: fill .3s;
    }

    :hover {
        svg {
            fill: #EC5757;
        }
    }
`

export function DeleteButton({ ...rest }) {
    return (
        <StyledDeleteButton type="button" aria-label="delete item" {...rest}>
            <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fillRule="nonzero"/>
            </svg>
        </StyledDeleteButton>
    )
}