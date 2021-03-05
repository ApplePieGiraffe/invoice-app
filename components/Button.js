import styled, { css } from 'styled-components'

const Button = styled.button`
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
    cursor: pointer;
    transition: background .3s;
    outline: none;

    &:hover {
        background: #9277FF;
    }

    ${props => props.secondary && css`
        background: ${props.theme.color.bg.btn.secondary.fill};
        color: ${props.theme.color.bg.btn.secondary.text};

        &:hover {
            background: ${props.theme.color.bg.btn.secondary.hover};
        }
    `}

    ${props => props.tertiary && css`
        background: ${props.theme.color.bg.btn.tertiary.fill};
        color: ${props.theme.color.bg.btn.tertiary.text};

        &:hover {
            background: ${props.theme.color.bg.btn.tertiary.hover};
        }
    `}

    ${props => props.alert && css`
        background: #EC5757;

        &:hover {
            background: #FF9797;
        }
    `}

    ${props => props.quaternary && css`
        background: #EC5757;

        &:hover {
            background: #FF9797;
        }
    `}
`

export default Button

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