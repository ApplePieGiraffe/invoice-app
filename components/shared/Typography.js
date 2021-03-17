import { css } from 'styled-components'

const baseStyles = css`
    font-family: 'Spartan', sans-serif;
    transition: color .3s;
`

export const fontStylesA = css`
    ${baseStyles}
    color: ${props => props.color || props.theme.color.text.bodyA};
    font-size: ${props => props.size || '.75rem'};
    line-height: 1.125;
    letter-spacing: -.25px;
`

export const fontStylesB = css`
    ${baseStyles}
    color: ${props => props.color || props.theme.color.text.bodyA};
    font-size: ${props => props.size || '.6875rem'};
    line-height: 1.63;
    letter-spacing: -.23px;
`